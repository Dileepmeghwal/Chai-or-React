import React from "react";
import { useContext } from "react";
import { MyContext } from "./MyContext";
import Son from "./Son";

const MyComponent = ({ data }) => {
  const { name, isLoggedIn } = data;
  const { text, setText } = useContext(MyContext);
  return (
    <div>
      <h3>Parent</h3>
      {name}
      {/* <h1>{text}</h1>
      <button onClick={() => setText("Hello World!")}>click me</button> */}

      <Son {...{data}}/>
    </div>
  );
};

export default MyComponent;
