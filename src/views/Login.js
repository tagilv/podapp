import { Button, Container, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import GradeIcon from "@mui/icons-material/Grade";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Store info received:
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  // const [isFieldsInitialEmtpy, setIsFieldsInitialEmtpy] =
  //   useState("InitialEmtpy");

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
      // handleInitialEmtpyFieldsButton();
    }
  };

  // const handleInitialEmtpyFieldsButton = () => {
  //   if (emailError && passwordError === "") {
  //   }
  //   setIsFieldsInitialEmtpy("");

  // };

  const isFieldDisabled = () => {
    return (
      emailError !== "" ||
      passwordError !== "" ||
      email === "" ||
      password === ""
    );
  };

  //Start sending the info to Firebase:
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/");
    } catch (error) {}
    //Create function to register

    // login(email, password);
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
            <Typography variant="h6">Login to your account</Typography>
          </Box>
          <Box component="form">
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
              autoComplete="off"
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
              autoComplete="off"
            />
            {passwordError && <Typography>{passwordError}</Typography>}
            <br />
            <br />
            {/* {!emailError && !passwordError && (
              <Typography>Well Done!</Typography>
            )} */}
            <br />
            <Button
              // calling the function
              disabled={isFieldDisabled()}
              type="submit"
              onClick={handleLogin}
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
              Login
            </Button>

            {/* {emailError || passwordError ? (
              <Button
                disabled
                type="submit"
                onClick={handleLogin}
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
                Login
              </Button>
            ) : (
              <Button
                type="submit"
                onClick={handleLogin}
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
                Login
              </Button>
            )} */}
          </Box>
        </Container>
        <br />
        <Link to="/register">Dont have an account? - Go here to register</Link>
      </div>
    </>
  );
}

export default Login;

// Working but not nice

// import { Container, Typography } from "@mui/material";
// import React, { useContext, useState } from "react";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import GradeIcon from "@mui/icons-material/Grade";

// function Login() {
//   const { login } = useContext(AuthContext);
//   // Store info received:
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [emailError, setEmailError] = useState("");
//   const [passwordError, setPasswordError] = useState("");

//   // const [successMessage, setSuccessMessage] = useState("")

//   const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//     if (regex.test(email) === false) {
//       setEmailError("Please enter valid email");
//     } else {
//       setEmailError("");
//     }
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//     if (e.target.value.length < 6) {
//       setPasswordError("Password has to be at least 6 charcaters long");
//     } else {
//       setPasswordError("");
//     }
//   };

//   //Start sending the info to Firebase:
//   const handleLogin = () => {
//     //Create function to register
//     //The below fucntion we havent created yet...
//     login(email, password);
//   };

//   return (
//     <>
//       <div>
//         <Container maxWidth="sm">
//           <Typography variant="h6">Login</Typography>

//           <label htmlFor="email"></label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={email}
//             onChange={handleEmailChange}
//             placeholder="email"
//             autocomplete="off"
//           />
//           {emailError && <p>{emailError}</p>}
//           <label htmlFor="password"></label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//             placeholder="email"
//             autocomplete="off"
//           />
//           {passwordError && <p>{passwordError}</p>}
//           <br />
//           <br />
//           {!emailError && !passwordError && <p>Well Done!</p>}
//           <br />

//           <button type="submit" onClick={handleLogin}>
//             Login
//           </button>
//         </Container>
//         <br />
//         <Link to="/register">Dont have an account? - Go here to register</Link>
//       </div>
//     </>
//   );
// }

// export default Login;
