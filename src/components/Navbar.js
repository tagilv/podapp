import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
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
    console.log(`user ${user?.userName} logged in`);
  };

  const Logout = () => {
    setUser(null);
    console.log(`user logged out`);
  };

  const hideNav = () => {
    console.log(location);
  };

  return (
    <>
      {location.pathname !== "/" ? (
        <nav className="bottomnav">
          <Link to="/">Home</Link> <Link to="/collections">Collections</Link>{" "}
          <Link to="/profile">Profile</Link>
        </nav>
      ) : null}
    </>
  );
}

export default Navbar;
