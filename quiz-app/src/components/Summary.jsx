import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTION from "../questions.js";

export default function Summary({ userAnswers }) {
  const skippedAns = userAnswers.filter((answer) => answer === null);
  const correctAns = userAnswers.filter(
    (answer, index) => answer === QUESTION[index].answers[0]
  );

  const skipPercent = Math.round((skippedAns.length / userAnswers.length) * 100);
  const correctPercent = Math.round((correctAns.length / userAnswers.length) * 100);
  const wrongPercent = 100 - skipPercent - correctPercent;

  return (
    <div id="summary">
      <img src={quizCompleteImg} alt="quizComplete" />
      <h2>Quiz Completed!</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skipPercent}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctPercent}%</span>
          <span className="text">correct</span>
        </p>
        <p>
          <span className="number">{wrongPercent}%</span>
          <span className="text">wong</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let css = "user-answer";

          if (answer === null) {
            css += " skipped";
          } else if (answer === QUESTION[index].answers[0]) {
            css += " correct";
          } else {
            css += " wrong";
          }

          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTION[index].text}</p>
              <p className={css}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
