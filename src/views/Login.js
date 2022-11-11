import { Container } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { login } = useContext(AuthContext);
  // Store info received:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
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
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <label htmlFor="email">email</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <label htmlFor="password">password</label>
          <button type="submit" onClick={handleLogin}>
            Login
          </button>
        </Container>
        <Link to="/register">
          If you dont have an account, go here to register
        </Link>
      </div>
      ;
    </>
  );
}

export default Login;
