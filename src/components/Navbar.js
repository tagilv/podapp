import { Button } from "@mui/material";
import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import style from "../style/style.css";

function Navbar() {
  const { user, setUser } = useContext(AuthContext);

  const location = useLocation();

  const Login = () => {
    setUser({
      userName: "Viktor",
    });
    // console.log(`user ${user?.userName} logged in`);
  };

  const Logout = () => {
    setUser(null);
    // console.log(`user logged out`);
  };

  const hideNav = () => {
    // console.log(location);
  };

  return (
    <>
      {location.pathname !== "/" ? (
        <nav className="bottomnav">
          <NavLink to="/">Home</NavLink>{" "}
          <NavLink to="/collections">Collections</NavLink>{" "}
          <Link to="/chat">Chat</Link>
        </nav>
      ) : null}
    </>
  );
}

export default Navbar;

// <NavLink
//   style={({ isActive }) => {
//     return isActive ? { color: "green" } : {};
//   }}
//   to="/collections"
// ></NavLink>;
