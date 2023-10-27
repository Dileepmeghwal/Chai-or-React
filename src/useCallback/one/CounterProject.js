import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import ChildComponent from "./ChildComponent";

const CounterProject = () => {
  const [add, setAdd] = useState(0);
  const [addOne, setAddOne] = useState(0);

  const increment = useCallback(() => {
    setAdd(add + 1);
  }, [add]);

  const decrement = useCallback(() => {
    setAdd(add - 1);
  }, [add]);

  const learning = useCallback(() => {
    //some code
  }, [addOne]);

  return (
    <div>
      <div>
        <h1>Learning useCallback</h1>
        <p>Counter: {add}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <h1>another counter {addOne}</h1>
        <button onClick={() => setAddOne(addOne + 1)}>Inc two</button>
        <ChildComponent learning={learning} />
      </div>
    </div>
  );
};

export default CounterProject;
