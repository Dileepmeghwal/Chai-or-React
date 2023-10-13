import React from "react";
import Child from "./Child";
import { useContext } from "react";
import { MyContext } from "./MyContext";

const Son = (data) => {
  // console.log(data);
  const { user } = useContext(MyContext);
  return (
    <>
      <div>
        Son:{user.name} data:{data.isloggedIn ? "not" : "yes"}{" "}
      </div>
      <Child />
    </>
  );
};

export default Son;
