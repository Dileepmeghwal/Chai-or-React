import React from "react";
import { useCallback ,useState} from "react";


const ExpensiveComponent = ({ calculate, number }) => {
  const result = calculate(number);
  return <div>Result: {result}</div>;
};
const ComplexCalculation = () => {
  const [number, setNumber] = useState(1);

  const calculateResult = useCallback((num) => {
    console.log("performing expensive calculation...");
    for (let i = 0; i < 1000000000; i++) {
      return num * 2;
    }
  }, []);
  return (
    <div>
      {" "}
      <h1>useCallback Example</h1>
      <p>Number: {number}</p>
      <button onClick={()=> setNumber(number + 1)}>Increement</button>
      <ExpensiveComponent number={number} calculate={calculateResult} />
    </div>
  );
};

export default ComplexCalculation;
