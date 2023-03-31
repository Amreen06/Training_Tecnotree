import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (<center><form>
    <div>
      <h1>Counter</h1>
      <p>Current count: {count}</p>
      <button class = "ab" onClick={handleIncrement}>Increment</button>
      <button class = "bc" onClick={handleDecrement}>Decrement</button>
    </div></form></center>
  );
}

export default Counter;
