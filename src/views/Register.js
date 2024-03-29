import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Register() {
  const { register } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isFieldsInitialEmtpy, setIsFieldsInitialEmtpy] =
    useState("InitialEmtpy");

  const [username, setUsername] = useState("");

  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

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
      setPasswordError("Password has to be at least 6 characters long");
    } else {
      setPasswordError("");
      handleInitialEmtpyFieldsButton();
    }
  };

  const handleInitialEmtpyFieldsButton = () => {
    if (emailError && passwordError === "") {
    }
    setIsFieldsInitialEmtpy("");
  };

  //Sending the info to Firebase
  const handleRegister = (event) => {
    event.preventDefault();
    register(email, password, username);
  };

  return (
    <>
      <div>
        <Container
          maxWidth="sm"
          sx={{
            bgcolor: "lightgrey",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">Signup for an account</Typography>
          </Box>
          <Box component="form">
            <label htmlFor="username"></label>
            <TextField
              margin="normal"
              fullWidth
              type="username"
              name="username"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              placeholder="username"
              autocomplete="off"
            />
            <label htmlFor="email"></label>
            <TextField
              margin="normal"
              fullWidth
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="email"
              autocomplete="off"
            />
            {emailError && <Typography>{emailError}</Typography>}
            <label htmlFor="password"></label>
            <TextField
              margin="normal"
              fullWidth
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="password"
              autocomplete="off"
            />
            {passwordError && <Typography>{passwordError}</Typography>}
            <br />
            <Button
              disabled={emailError || passwordError || isFieldsInitialEmtpy}
              type="submit"
              onClick={handleRegister}
              fullWidth
              variant="contained"
              sx={{
                width: "35vw",

                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "gray",
                },
              }}
            >
              Register
            </Button>
          </Box>
          <Box
            sx={{
              height: "40vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
            }}
          >
            <Typography
              as={Link}
              to="/login"
              sx={{
                color: "black",
                padding: 1,
              }}
            >
              Already have an account? - Go to login
            </Typography>
          </Box>
        </Container>
        <br />
      </div>
    </>
  );
}

export default Register;
