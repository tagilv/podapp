import React from "react";
import { useParams, useLocation } from "react-router-dom";
import Podcast from "../components/Podcast";

function CollectionDetails() {
  let params = useParams();

  // let {
  //   state: {
  //     collection: { podcasts },
  //   },
  // } = useLocation();

  const location = useLocation();
  console.log("location", location);

  let podcastArray = location.state.collection.podcasts;

  return (
    <div>
      <h2>Details page about {params.title}</h2>

      <h2>List of podcasts here</h2>
      {podcastArray.map((podcast) => {
        return <Podcast key={podcast.id} podcast={podcast} />;
      })}
    </div>
  );
}

export default CollectionDetails;
