import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({title, targetTime}) {
    const timer = useRef();
    const dialog = useRef();

    const [timeRemain, setTimeRemain] = useState(targetTime * 1000);

    const timerIsActive = timeRemain > 0 && timeRemain < targetTime * 1000;

    if (timeRemain <= 0 ) {
        clearInterval(timer.current);
        dialog.current.open();
    }

    function handleReset(){
        setTimeRemain(targetTime * 1000);
    }

    function handleBtnStart() {
        timer.current = setInterval(()=>{
           setTimeRemain(prevTimeRemain => prevTimeRemain - 10);
        }, 10);

    }

    function handleStop() {
        dialog.current.open();
        clearInterval(timer.current);
    }
    
    return (
        <>
            <ResultModal onReset={handleReset} ref={dialog} targetTime={targetTime} remainingTime={timeRemain}/>
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">
                    {targetTime} second{targetTime > 1 ? 's' : ''}
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleBtnStart}>
                        {timerIsActive ? 'Stop' : 'Start'} Challenge
                    </button>
                </p>
                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? 'Time is running' : 'Timer inactive'}
                </p>
            </section>
        </>
    );
}