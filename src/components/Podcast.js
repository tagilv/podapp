import React from "react";
import { Link } from "react-router-dom";

function Podcast({ podcast }) {
  return (
    <div>
      <Link to={`${podcast.title}`} state={{ podcast: podcast }}>
        <h2>{podcast.title}</h2>
      </Link>
      <img src={podcast.thumbnail} alt="" />
    </div>
  );
}

export default Podcast;
