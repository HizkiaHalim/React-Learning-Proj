import { useEffect, useState } from "react";

export default function Timer({ timeLimit, onTimeUp , mode}) {
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    const timeout = setTimeout(onTimeUp, timeLimit);

    return () => {
      clearTimeout(timeout);
    };
  }, [timeLimit, onTimeUp]);

  useEffect(() => {
    const interv = setInterval(() => {
      setTimeLeft((prevTimeLeft) => prevTimeLeft - 10);
    }, 10);

    return () => {
      clearInterval(interv);
    };
  }, []);

  return <progress id="question-time" max={timeLimit} value={timeLeft} className={mode}/>;
}
