import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Podcast from "../components/Podcast";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";

function CollectionPodcastsDetails() {
  let params = useParams();

  const location = useLocation();
  console.log("location", location);

  let podcastArray = location.state.collection.podcasts;

  return (
    <div>
      <Container>
        <h2>{params.title}</h2>
        <Grid container spacing={3}>
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
