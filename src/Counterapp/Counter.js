import React, { useState } from "react";

const Counter = () => {
  const style = {
    textAlign: "center",
    backgroundColor: "DodgerBlue",
    width: "50%",
    height: "300px",
    margin: "10% 25% 00% 25%",
    // marginBottom: "25%",
    // marginRight: "25%",
    // marginLeft: "25%",
  };
  const [counter, setCounter] = useState(0);
  console.log(counter);
  const handleClick = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <h1>CounterApp</h1>
      <div style={style}>
        <h1>{counter}</h1>
        <div
          style={{
            margin: "0% ",
          }}
        >
          <button onClick={() => setCounter(counter + 1)}>Increment</button>
          <button onClick={handleClick}>decrement</button>
          <button onClick={() => setCounter(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
