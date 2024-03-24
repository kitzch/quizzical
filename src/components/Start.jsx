import React from "react";

export default function Start(props) {
  return (
    <>
      <div className="start-wrapper">
        <h1>Quizzical</h1>
        <button onClick={props.startGame}>Start quiz</button>
      </div>
    </>
  );
}
