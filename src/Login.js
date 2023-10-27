import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const [saveData, setSaveData] = useState();

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        userData
      );
      // Handle successful login, e.g., store the token in localStorage or a state variable
      localStorage.setItem("userDara", userData);
      console.log("Login Successful! Token:", response.data.token);
      setError(response.status.error);
      setMsg("Loggin successfully");
    } catch (error) {
      // Handle login error
      console.error("Login Failed:", error);
      setError(error.response.data.error);
    }
  };
  return (
    <div>
      <form onSubmit={loginHandler}>
        <input
          type="email"
          placeholder="Email"
          name=""
          id=""
          value={userData.email}
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <br />

        <input
          type="password"
          name=""
          placeholder="Password"
          id=""
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <br />
        {error && <p style={{ color: "red" }}>{error}</p>}
        {msg && <p style={{ color: "grey" }}>{msg}</p>}
        <button type="submit">Login</button>
        <Link to="/signup">Signup</Link>
        <br/>
        <Link to="/forgot">Forgot Password</Link>
      </form>
    </div>
  );
};

export default Login;
