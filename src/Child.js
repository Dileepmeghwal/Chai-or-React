import React from "react";
import { useContext } from "react";
import { MyContext } from "./MyContext";

const Child = () => {
  const { user } = useContext(MyContext);
  return <div>Child: {user.name}</div>;
};

export default Child;
