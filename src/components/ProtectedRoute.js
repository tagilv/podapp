import React, { useContext } from "react";
import { Navigate, Route } from "react-router";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  console.log("protecred route children", children);
  const { user, setUser } = useContext(AuthContext);

  // Create the rule for what to show the user:
  const isAuthenticated = user ? true : false;

  return <>{isAuthenticated ? children : <Navigate to="/" />}</>;
}

export default ProtectedRoute;
