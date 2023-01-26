import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function TopNavbar() {
  const { user, setUser, login, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

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
          <ArrowBackIcon
            onClick={() => {
              navigate(-1);
            }}
          ></ArrowBackIcon>
          {/* <Link to="/previous">back</Link> */}
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
