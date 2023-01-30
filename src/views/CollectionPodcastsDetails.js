import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Podcast from "../components/Podcast";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

function CollectionPodcastsDetails() {
  let params = useParams();

  const location = useLocation();

  let podcastArray = location.state.collection.podcasts;

  return (
    <div>
      <Container
        sx={{
          bgcolor: "lightgrey",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <Box
          sx={{
            bgcolor: "lightgrey",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            padding: 4,
          }}
        >
          <Typography variant="h5">{params.title}</Typography>
        </Box>
        <Grid container spacing={1}>
          {podcastArray.map((podcast) => {
            return <Podcast key={podcast.id} podcast={podcast} />;
          })}
        </Grid>
      </Container>
    </div>
  );
}

export default CollectionPodcastsDetails;

//Could go on line 8
// let {
//   state: {
//     collection: { podcasts },
//   },
// } = useLocation();
