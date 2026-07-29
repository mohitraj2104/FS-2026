import { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  function startTimer() {
    setIsRunning(true);
  }

  function stopTimer() {
    setIsRunning(false);
  }

  function resetTimer() {
    setIsRunning(false);
    setSeconds(0);
  }

  const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
  const secs = String(seconds % 60).padStart(2, "0");

  return (
    <div className="container">
      <div className="card">
        <h1>⏱ Stopwatch</h1>

        <div className="timer">
          {hrs}:{mins}:{secs}
        </div>

        <div className="buttons">
          <button className="start" onClick={startTimer}>
            Start
          </button>

          <button className="stop" onClick={stopTimer}>
            Stop
          </button>

          <button className="reset" onClick={resetTimer}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}