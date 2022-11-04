import React from "react";
import { Link, useLocation } from "react-router-dom";

const getSearch = (input) => {
  console.log(input);
};

function Navbar() {
  // const location = useLocation();
  // console.log("location", location);

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
        <h2>Search here</h2>
        <input
          type="text"
          id="myInput"
          onChange={(e) => getSearch(e.target.value)}
          placeholder="Search Playlists.."
        ></input>
      </nav>
    </>
  );
}

export default Navbar;
