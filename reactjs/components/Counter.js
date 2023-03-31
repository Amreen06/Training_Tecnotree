
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (<center>
    <div>
      <h1>Count: {count}</h1>
      <button class="b1"onClick={() => setCount(count + 1)}>Increment</button>
      <button class="b2"onClick={() => setCount(count - 1)}>Decrement</button>
    </div>  </center>
  );
}

export default Counter;

