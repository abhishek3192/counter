import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [active, setActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const countRef = useRef(null);

  const handleStart = () => {
    setActive(true);
    setIsPaused(false);
    countRef.current = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
  };

  const handleReset = () => {
    clearInterval(countRef.current);
    setCounter(0);
    setActive(false);
    setIsPaused(false);
  };

  const handlePause = () => {
      clearInterval(countRef.current);
      setIsPaused(false);
    }

  return (
    <div className="App">
      <div className="card">
        <p>{counter}</p>
        <div className="buttons">
          {!active && !isPaused ? (
            <button onClick={handleStart}>Start</button>
          ) : (
            <button onClick={handlePause}>Pause</button>
          )}
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
