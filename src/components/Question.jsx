import { decode } from "html-entities";
import { useState, useMemo } from "react";
import Answer from "../components/Answer";

export default function Question(props) {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const shuffleArray = (correctAnswer, incorrectAnswers) => {
    let answers = [];
    incorrectAnswers.forEach((answer) =>
      answers.push({ answer: answer, correct: false, isSelected: false })
    );
    answers.push({
      answer: correctAnswer,
      correct: true,
      isSelected: false,
    });
    for (let i = answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
    return answers;
  };

  const shuffledArray = useMemo(
    () => shuffleArray(props.correctAnswer, props.incorrectAnswers),
    [props.correctAnswer, props.incorrectAnswers]
  );

  const answerButtons = shuffledArray.map((item) => {
    return (
      <Answer
        item={item}
        onSelect={setSelectedAnswer}
        isSelected={selectedAnswer === item.answer}
        isFinished={props.isFinished}
      />
    );
  });

  return (
    <>
      <h3>{decode(props.question)}</h3>
      <div className="answer-wrapper">{answerButtons}</div>
      <hr className="solid" />
    </>
  );
}
