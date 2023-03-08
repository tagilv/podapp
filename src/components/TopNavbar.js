import { Typography } from "@mui/material";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import ReplyIcon from "@mui/icons-material/Reply";
import { Box } from "@mui/system";

function TopNavbar() {
  const { user, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? (
        ""
      ) : user ? (
        <nav className="topnav">
          <ReplyIcon
            sx={{
              color: "white",
            }}
            onClick={() => {
              navigate(-1);
            }}
          />
          <Link to="/profile">
            <AccountCircleIcon
              sx={{
                color: "white",
              }}
            />
          </Link>
          <Link to="/logout" onClick={() => logout()}>
            <LogoutIcon
              sx={{
                color: "white",
              }}
            />
          </Link>
        </nav>
      ) : (
        <nav className="topnav">
          <ReplyIcon
            sx={{
              color: "white",
            }}
            onClick={() => {
              navigate(-1);
            }}
          />
          {/* <Link to="/previous">back</Link> */}
          <Link to="/profile">
            <AccountCircleIcon
              sx={{
                color: "white",
              }}
            />
          </Link>
          <Box
            sx={{
              justifyContent: "space-between",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Typography
              sx={{
                color: "white",
                display: "flex",
                textDecoration: "none",
                justifyContent: "space-between",
                padding: 1,
              }}
              as={Link}
              to="/register"
            >
              signup
            </Typography>
            <Typography
              sx={{
                color: "white",
                textDecoration: "none",
                padding: 1,
              }}
              as={Link}
              to="/login"
            >
              login
            </Typography>
          </Box>
        </nav>
      )}
    </>
  );
}

export default TopNavbar;
