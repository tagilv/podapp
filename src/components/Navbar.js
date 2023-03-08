import { Button } from "@mui/material";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import style from "../style/style.css";
import HomeIcon from "@mui/icons-material/Home";
import PodcastsIcon from "@mui/icons-material/Podcasts";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

function Navbar() {
  const location = useLocation();

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
