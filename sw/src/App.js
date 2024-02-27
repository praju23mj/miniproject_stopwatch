import React from "react";
import { useState, useEffect } from "react";
import './App.css';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setElapsedTime((prevElapsedTime) => prevElapsedTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const reset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };
  const startStopTimer = () => {
    setIsRunning(!isRunning);
  };

  return (
    <div>
      <h1>Stopwatch</h1>
      <p>{formatTime(elapsedTime)}</p>
      <button onClick={startStopTimer}>{isRunning ? "Stop" : "Start"}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;

    
