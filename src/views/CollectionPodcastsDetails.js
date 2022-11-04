import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Podcast from "../components/Podcast";

function CollectionPodcastsDetails() {
  let params = useParams();

  const location = useLocation();
  console.log("location", location);

  let podcastArray = location.state.collection.podcasts;

  return (
    <div>
      <h2>CollectionPodcastsDetails view here:</h2>

      <h2>Details page about {params.title}</h2>

      <h2>Podcast Componants here:</h2>
      {podcastArray.map((podcast) => {
        return <Podcast key={podcast.id} podcast={podcast} />;
      })}
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
