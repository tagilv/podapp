import { Container } from "@mui/material";
import React from "react";

function Login() {
  return (
    <>
      <div>
        <Container maxWidth="sm">
          <h2>Log in</h2>
          <div>
            <label for="email"></label>
            <input type="text" name="email" />
            <label for="password"></label>
            <input type="text" name="password" />
            <button type="submit">Login</button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Login;
