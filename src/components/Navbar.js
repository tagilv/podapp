import { Button } from "@mui/material";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, setUser } = useContext(AuthContext);

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

  return (
    <>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <h2>This is my navbar</h2>
        <Link to="/">Home</Link> | <Link to="/collections">Collections</Link> |{" "}
        <Link to="/contact">Contact</Link>
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
    </>
  );
}

export default Navbar;

// const location = useLocation();
// console.log("location", location);
