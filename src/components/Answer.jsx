import { useState } from "react";
import { decode } from "html-entities";

export default function Answer(props) {
  const styles = {
    backgroundColor:
      props.isSelected && props.item.correct && props.isFinished
        ? "#008000"
        : props.isSelected && props.isFinished
        ? "#FF0000"
        : props.isSelected && "#D6DBF5",
  };

  function selectAnswer(e) {
    props.onSelect(e.target.value);
  }

  return (
    <button
      className="answer-button"
      style={styles}
      onClick={selectAnswer}
      value={decode(props.item.answer)}
    >
      {decode(props.item.answer)}
    </button>
  );
}
