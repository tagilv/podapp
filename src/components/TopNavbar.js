import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import style from "../style/style.css";

function TopNavbar() {
  const { user, setUser, login, logout } = useContext(AuthContext);

  const location = useLocation();
  console.log("location", location);

  // const hideNav = () => {
  //   if (location.pathname === "/") {
  //     console.log("helloooooooooooo");
  //   }
  // };
  // hideNav();

  return (
    <>
      {location.pathname === "/" ? (
        ""
      ) : user ? (
        <nav className="topnav">
          <Link to="/logout" onClick={() => logout()}>
            Logout
          </Link>
          <Link to="/profile">Profile</Link>
        </nav>
      ) : (
        <nav className="topnav">
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </nav>
      )}
    </>
  );
}

export default TopNavbar;
