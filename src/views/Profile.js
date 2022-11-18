import { Container } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import useFavouritePodcasts from "../hooks/useFavouritePodcasts";

function Profile() {
  // Thanks to useContext you can cinsume the info in user object
  const { user, checkUserLoginStatus } = useContext(AuthContext);

  useEffect(() => {
    // getUserInformation()
    checkUserLoginStatus();
  }, []);

  // Get the value of this using const favouritePodcast
  const favouritePodcasts = useFavouritePodcasts(user.uid);
  // console.log("favouritePodcasts>>", favouritePodcasts);

  return (
    <>
      <Container
        sx={{
          bgcolor: "lightgrey",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <h2>Welcome {user?.displayName}"</h2>
        <h4>You have saved {favouritePodcasts.length} Podcasts so far</h4>
        {favouritePodcasts.map((favouritePodcast) => {
          return <p key={favouritePodcast.id}>{favouritePodcast.title}</p>;
        })}
      </Container>
    </>
  );
}

export default Profile;
