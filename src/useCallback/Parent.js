import React, { useCallback, useEffect, useState } from "react";
import Child from "../useCallback/Child";

const Parent = () => {
  const [count, setCount] = useState(0);

  //   const increment = useCallback(() => {
  //     console.log(count)
  //     setCount(count + 1);
  //   });
  const increment = () => {
    setCount((count) => count + 1);
  };
  const learning = useCallback(() => {
    console.log("leraining");
  },[count]);
  console.log("parent compon");
  return (
    <div>
      Parent
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>count</button>
      <Child learning={learning} />
    </div>
  );
};

export default Parent;
