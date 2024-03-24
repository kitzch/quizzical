import { useState } from "react";
import Question from "../components/Question";

export default function Quiz(props) {
  const [finished, setFinished] = useState(false);
  const questions = props.items.map((item) => {
    return (
      <Question
        question={item.question}
        correctAnswer={item.correct_answer}
        incorrectAnswers={item.incorrect_answers}
        isFinished={finished}
      />
    );
  });

  function checkAnswers() {
    setFinished(true);
  }

  return (
    <>
      <div className="quiz-wrapper">
        {questions}
        <button onClick={checkAnswers}>Check answers</button>
      </div>
    </>
  );
}
