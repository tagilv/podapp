import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

function Profile() {
  // Thanks to useContext you can cinsume the info in user object
  const { user, checkUserLoginStatus } = useContext(AuthContext);

  useEffect(() => {
    // getUserInformation()
    checkUserLoginStatus();
  }, []);

  return (
    <div>
      <h2>Welcome {user?.displayName}"</h2>
      <h6>In the future you will find messages and favourites here..</h6>
    </div>
  );
}

export default Profile;
