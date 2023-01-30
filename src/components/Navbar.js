import { Button } from "@mui/material";
import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import style from "../style/style.css";
import HomeIcon from "@mui/icons-material/Home";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

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
          <NavLink to="/">
            <HomeIcon
              sx={{
                color: "white",
              }}
            />
          </NavLink>{" "}
          <NavLink to="/collections">
            <PodcastsIcon
              sx={{
                color: "white",
              }}
            />
          </NavLink>{" "}
          <Link to="/chat">
            <ChatBubbleOutlineIcon
              sx={{
                color: "white",
              }}
            />
          </Link>
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
