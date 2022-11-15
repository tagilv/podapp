import { Container } from "@mui/material";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const { register } = useContext(AuthContext);
  // Store info received:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [username, setUsername] = useState("");

  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (regex.test(email) === false) {
      setEmailError("please enter valid email");
    } else {
      setEmailError("");
      // return true
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("Password has to be at least 6 characters long");
    } else {
      setPasswordError("");
      // return true
    }
  };

  //Start sending the info to Firebase:
  const handleRegister = (event) => {
    event.preventDefault();
    //Create function to register
    //The below fucntion we havent created yet...
    register(email, password, username);
  };

  return (
    <>
      <div>
        <Container maxWidth="sm">
          <h2>Register</h2>
          <form>
            <label htmlFor="username"></label>
            <input
              type="username"
              name="username"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="username"
              autocomplete="off"
            />
            <label htmlFor="email"></label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="email"
              autocomplete="off"
            />
            {emailError && <p>{emailError}</p>}
            <label htmlFor="password"></label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="password"
              autocomplete="off"
            />
            {passwordError && <p>{passwordError}</p>}

            <button onClick={handleRegister}>Register</button>
          </form>
        </Container>
        <br />
        <Link to="/login">Alread have an account? - Go to login</Link>
      </div>
    </>
  );
}

export default Register;
