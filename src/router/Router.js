import React from "react";
import { NavLink } from "react-router-dom";

const Router = () => {
  return (
    <div>
      <NavLink
        to="/shop"
        style={({ isActive, isPending }) => {
          return {
            color: isActive ? "red" : "green",
          };
        }}
        // className={({ isActive, isPending }) => {
        //   return isActive ? "active" : isPending ? "pending" : "";
        // }}
        className={(isActive) => `${isActive ? "active" : "pending"}`}
      >
        Home
      </NavLink>
    </div>
  );
};

export default Router;
