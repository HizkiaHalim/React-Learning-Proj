import { useCallback, useState } from "react";

import QUESTIONS from "../questions.js";
import Question from "./Question.jsx";
import Summary from "./Summary.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizCompleteFlag = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAns = useCallback(function handleSelectAns(selectedAns) {
    setUserAnswers((prevAns) => {
      return [...prevAns, selectedAns];
    });
  }, []);

  const handleSkipAns = useCallback(() => {
    handleSelectAns(null);
  }, [handleSelectAns]);

  if (quizCompleteFlag) {
    return (
        <Summary userAnswers={userAnswers} />
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAns={handleSelectAns}
        handleSkipAns={handleSkipAns}
      />
    </div>
  );
}
