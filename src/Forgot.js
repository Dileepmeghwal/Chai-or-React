import axios from "axios";
import React from "react";
import { useState } from "react";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const handleForgotPassword = () => {
    axios
      .get("http://localhost:5000/users", { params: { email } })
      .then((response) => {
        if (response.data.length === 1) {
          console.log("this is your password");
        } else {
          console.log("Email doesn't exist in the database");
        }
      })
      .catch((error) => {
        // Handle any errors
        console.log(error);
      });
  };
  return (
    <div>
      <div>
        <h2>Forgot Password</h2>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button onClick={handleForgotPassword}>Reset Password</button>
      </div>
    </div>
  );
};

export default Forgot;
