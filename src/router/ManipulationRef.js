import React, { useEffect, useState } from "react";
import { useRef } from "react";

const ManipulationRef = () => {
  const myRef = useRef(null);
  const [isToggled, setIsToggled] = useState(false);
  useEffect(() => {
    const handleClick = () => {
      // Toggle your class or perform other DOM manipulation
      if (myRef.current) {
        myRef.current.classList.toggle("toggle");
      }

      // Toggle state for React-driven changes
      setIsToggled((prev) => !prev);
    };

    // Add event listener to the button
    if (myRef.current) {
      myRef.current.addEventListener("click", handleClick);
    }

    // Cleanup the event listener when the component unmounts
    return () => {
      if (myRef.current) {
        myRef.current.removeEventListener("click", handleClick);
      }
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <button ref={myRef}>{isToggled ? "Toggled On" : "Toggled Off"}</button>
  );
};

export default ManipulationRef;
