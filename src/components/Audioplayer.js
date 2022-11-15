import React from "react";

function Audioplayer({ Audioplayer, episode }) {
  return (
    <div>
      <audio src={episode.audio}></audio>
      <React.Fragment>
        <audio controls>
          <source src={episode.audio} type="audio/ogg" />
          <source src={episode.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </React.Fragment>
    </div>
  );
}

export default Audioplayer;
