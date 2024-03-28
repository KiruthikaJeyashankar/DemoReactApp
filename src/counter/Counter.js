import React, { useState } from "react";
import "./Counter.css"
function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div>Counter</div>
      <div>{counter}</div>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default Counter;
