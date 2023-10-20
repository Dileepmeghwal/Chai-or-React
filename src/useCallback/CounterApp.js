import React, { useCallback, useEffect, useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const incrementWithCallback = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  useEffect(() => {
    console.log("component re-rendered");
  });
  return (
    <div>
      <h1>count {count}</h1>

      <Kid/>
      <button onClick={increment}>increment without useCallback</button>
      <button onClick={incrementWithCallback}>
        increment with useCallback
      </button>
    </div>
  );
};

export default CounterApp;

export function Kid() {
    console.log("kid");
  return <h1>kid</h1>;
}
