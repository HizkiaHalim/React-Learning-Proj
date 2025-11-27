import { useRef } from "react";

export default function Answers({ answers, selectedAns, ansState, onSelect }) {
  const shuffeledAns = useRef();

  if (!shuffeledAns.current) {
    shuffeledAns.current = [...answers];
    shuffeledAns.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {shuffeledAns.current.map((ans) => {
        const isSelected = selectedAns === ans;
        let cssClass = "";

        if (ansState === "answered" && isSelected) {
          cssClass = "selected";
        }

        if ((ansState === "correct" || ansState === "wrong") && isSelected) {
          cssClass =  ansState ;
        }

        return (
          <li key={ans} className="answer">
            <button onClick={() => onSelect(ans)} className={cssClass} disabled={ansState != ''}>
              {ans}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
