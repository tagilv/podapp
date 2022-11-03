import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/">Home</Link> | <Link to="/collections">Collections</Link> |{" "}
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
