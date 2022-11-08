import { Button } from "@mui/material";
import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

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
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/">Home</Link> | <Link to="/collections">Collections</Link>{" "}
          | <Link to="/profile">Profile</Link>
          {user ? (
            <Button variant="danger" onClick={Logout}>
              Logout
            </Button>
          ) : (
            <Button variant="contained" onClick={Login}>
              Login
            </Button>
          )}
        </nav>
      ) : null}
    </>
  );
}

export default Navbar;
