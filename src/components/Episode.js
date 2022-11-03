import React from "react";

function Episode({ episode }) {
  return (
    <div>
      <h2>Episode</h2>
      {episode.audio}
      <img src={episode.image} alt="" />
    </div>
  );
}

export default Episode;
