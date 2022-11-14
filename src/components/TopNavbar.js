import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import style from "../style/style.css";

function TopNavbar() {
  const { user, setUser, login, logout } = useContext(AuthContext);

  const location = useLocation();

  // const Login = () => {
  //   setUser({
  //     userName: "Viktor",
  //   });
  //   console.log(`user ${user?.userName} logged in`);
  // };

  // const Logout = () => {
  //   setUser(null);
  //   console.log(`user logged out`);
  // };

  const hideNav = () => {
    // console.log(location);
  };

  return (
    <>
      <nav className="topnav">
        {user ? (
          <Button variant="danger" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button variant="contained" onClick={login}>
            Login
          </Button>
        )}
        <Link to="/profile">Profile</Link> |{" "}
        <Link to="/register">Register</Link> | <Link to="/login">Login</Link> |
        <Link to="/chat">Chat</Link>
      </nav>
    </>
  );
}

export default TopNavbar;
