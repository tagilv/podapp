import { CardMedia } from "@mui/material";
import React from "react";

function Episode({ episode }) {
  // console.log("episode>>", episode);
  return (
    <div>
      <img src={episode.image} alt="" />
      {/* <React.Fragment>
        <audio controls> */}
      {/* <source src={episode.audio} type="audio/ogg" /> */}
      {/* <source src={episode.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </React.Fragment> */}
    </div>
  );
}

export default Episode;
