import React, { useContext } from "react";
import { Navigate, Route } from "react-router";
import { AuthContext } from "../context/AuthContext";

function ProtectedRoute({ children }) {
  const { user, isLoading } = useContext(AuthContext);

  return (
    <>
      {isLoading ? <p>loading</p> : user ? children : <Navigate to="/login" />}
    </>
  );
}

export default ProtectedRoute;
