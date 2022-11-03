import React from "react";
import { Link } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <h3>Ops nothing here..</h3>
      <Link to="/">Go back to home</Link>
    </div>
  );
}

export default NoMatch;
