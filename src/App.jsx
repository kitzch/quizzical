import { useState } from "react";
import { useEffect } from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";

import "./App.css";

function App() {
  const [started, setStarted] = useState(false);
  const [quizItems, setQuizItems] = useState([]);

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=11")
      .then((res) => res.json())
      .then((data) => setQuizItems(data.results));
  }, []);

  function startGame() {
    setStarted(!started);
  }

  return (
    <>
      {started || <Start startGame={startGame} />}
      {started && <Quiz items={quizItems} />}
    </>
  );
}

export default App;
