import React, { useCallback, useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("counter");
  }, []); // Empty dependency array ensures it runs only on component mount

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

    // const increment = () => {
    //   console.log('counter');
    //   setCount(count + 1);
    // };
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
