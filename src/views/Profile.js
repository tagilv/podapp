import { Container } from "@mui/system";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import useFavouritePodcasts from "../hooks/useFavouritePodcasts";
import { Box, Typography } from "@mui/material";

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
          padding: 5,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "start",
            flexDirection: "column",
            height: "50vh",
          }}
        >
          <Box>
            <Typography variant="h5">Welcome {user?.displayName}"</Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                padding: 2,
              }}
              variant="h6"
            >
              You have saved {favouritePodcasts.length} Podcasts so far
            </Typography>
            {favouritePodcasts.map((favouritePodcast) => {
              return (
                <Typography variant="h" key={favouritePodcast.id}>
                  {favouritePodcast.title}
                </Typography>
              );
            })}
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Profile;
