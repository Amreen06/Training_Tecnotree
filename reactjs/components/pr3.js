import React, { useState, useEffect } from 'react';

function CountdownTimer({ seconds }) {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isActive && timeLeft > 0) {
      intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isActive, timeLeft]);

  function handleStart() {
    setIsActive(true);
  }

  return (
    <div>
        <center>
        <form>
      <h1 class = "tmp">Countdown Timer</h1>
      <h2 class = "tmp">{timeLeft}</h2>
      <center>
      {!isActive && timeLeft === seconds && ( 
        <button class = "bc" onClick={handleStart}>Start</button>
      )}
      {isActive && (
        <button class = "bc" onClick={() => setIsActive(false)}>Pause</button>
      )}
      {!isActive && timeLeft < seconds && timeLeft > 0 && (
        <button class = "bc" onClick={() => setIsActive(true)}>Resume</button>
      )}
      </center>
      {timeLeft === 0 && <p>Time's up!</p>}
      </form>
      </center>
    </div>
  );
}

export default CountdownTimer;