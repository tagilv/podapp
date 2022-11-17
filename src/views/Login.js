import { Container } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import GradeIcon from "@mui/icons-material/Grade";

function Login() {
  const { login } = useContext(AuthContext);
  // Store info received:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const [successMessage, setSuccessMessage] = useState("")

  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (regex.test(email) === false) {
      setEmailError("Please enter valid email");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError("Password has to be at least 6 charcaters long");
    } else {
      setPasswordError("");
    }
  };

  //Start sending the info to Firebase:
  const handleLogin = () => {
    //Create function to register
    //The below fucntion we havent created yet...
    login(email, password);
  };

  return (
    <>
      <div>
        <Container maxWidth="sm">
          <h2>Login</h2>
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
            placeholder="email"
            autocomplete="off"
          />
          {passwordError && <p>{passwordError}</p>}
          <br />
          <br />
          {!emailError && !passwordError && <p>Well Done!</p>}
          <br />

          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </Container>
        <br />
        <Link to="/register">Dont have an account? - Go here to register</Link>
      </div>
    </>
  );
}

export default Login;
