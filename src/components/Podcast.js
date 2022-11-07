import { Grid, IconButton } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
import ListIcon from "@mui/icons-material/List";

function Podcast({ podcast }) {
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

// <Link to={`${podcast.title}`} state={{ podcastId: podcast.id }}>
//   <h2>{podcast.title}</h2>
// </Link>
// <img src={podcast.thumbnail} alt="" />
