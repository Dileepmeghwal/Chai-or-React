import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [msg, setMsg] = useState("");
  const [error, setError] = useState("");
  const signupHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/signup",
        userData
      );
      console.log("registred successfully", response.data.error);
      setError(response.status.message);
      setMsg(response.data.message);
      setUserData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setError(error.response.data.error);
        setMsg("");
      } else {
        setError("An error occurred while signing up.");
      }
      console.log(error);
    }
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Enter Your Name"
          name=""
          id=""
          value={userData.name}
          onChange={(e) => setUserData({ ...userData, name: e.target.value })}
        />
        <br />
        <input
          type="email"
          placeholder="Enter email address"
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

        <button onClick={signupHandler}>Signup</button>
        {msg && <p>{msg}</p>}
        {error && <p>{error}</p>}
        <Link to="/">Login</Link>
      </form>
    </div>
  );
};

export default Signup;
