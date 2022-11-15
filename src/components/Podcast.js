import { Grid, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import ListIcon from "@mui/icons-material/List";

import FavoriteIcon from "@mui/icons-material/Favorite";

function Podcast({ podcast }) {
  const handleFavouritePodcast = () => {
    console.log("podcast.id>>", podcast.id);
    console.log("clicked");
  };
  console.log(podcast);
  return (
    <>
      <Grid item xs={12} md={6}>
        <Card elevation={3}>
          <CardHeader
            action={
              <IconButton size="medium">
                <Link to={`${podcast.title}`} state={{ podcastId: podcast.id }}>
                  <ListIcon />
                </Link>
                <button type="" onClick={handleFavouritePodcast}>
                  Add to favourites
                </button>
              </IconButton>
            }
            title={podcast.title}
            subheader={podcast.publisher}
          />
          <div width="50%">
            <CardMedia
              width="50%"
              component="img"
              height="194"
              image={podcast.thumbnail}
              alt=""
            />
          </div>
        </Card>
      </Grid>
    </>
  );
}

export default Podcast;
