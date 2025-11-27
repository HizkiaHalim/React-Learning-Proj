import { useState } from "react";

import Timer from "./Timer.jsx";
import Answers from "./Answers.jsx";
import QUESTION from "../questions.js";

export default function Question({ index, onSelectAns, handleSkipAns }) {
  const [answer, setAnswer] = useState({
    selectedAnswer: "",
    isCorrect: null,
  });

  function handleSelectAns(answer) {
    setAnswer({
      selectedAnswer: answer,
      isCorrect: null,
    });

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTION[index].answers[0] === answer,
      });

      setTimeout(() => {
        onSelectAns(answer);
      }, 2000);
    }, 1000);
  }

  let answerState = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answerState = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answerState = "answered";
  }

  let timer = 10000;

  if (answer.selectedAnswer) {
    timer = 1000;
  }

  if (answer.isCorrect !== null) {
    timer = 2000;
  }

  return (
    <div id="question">
      <Timer
        key={timer}
        timeLimit={timer}
        onTimeUp={answer.selectedAnswer === '' ? handleSkipAns : null}
        mode={answerState}
      />
      <h2>{QUESTION[index].text}</h2>
      <Answers
        answers={QUESTION[index].answers}
        selectedAns={answer.selectedAnswer}
        ansState={answerState}
        onSelect={handleSelectAns}
      />
    </div>
  );
}
