import React from "react";
import { useDarkMode } from "../Context/DarkModeContext";

const Card = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const cardStyle = {
    backgroundColor: isDarkMode ? "black" : "white",
    color: isDarkMode ? "white" : "black",
  };
  return (
    <div>
      <div className="card" style={cardStyle}>
        <h2>Card Component</h2>
        <p>This is a card component with dark mode.</p>
        <button onClick={toggleDarkMode}>
          Toggle Dark Mode: {isDarkMode ? "On" : "Off"}
        </button>
      </div>
    </div>
  );
};

export default Card;
