import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { data2 } from "../data/data2.js";
import Episode from "../components/Episode";

function IndividualCollectionDetails() {
  let params = useParams();

  const location = useLocation();
  console.log("location", location);

  let individualPodcastId = location.state.podcastId;
  console.log("individualPocastId>>", individualPodcastId);

  console.log("data2>>", data2.episodes);

  // Use individualPocastId to fetch episodes and render this episodes in episodes component
  // State is always in the scope of the component

  const [episodes, setEpisodes] = useState([]);

  const fetchEpisodes = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/users`;
      const response = await fetch(url);
      const result = await response.json();
      setEpisodes(data2.episodes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEpisodes();
  }, []);

  return (
    <div>
      <h2>IndividualCollectionDetails here</h2>
      {episodes.map((episode) => {
        return <Episode key={episode.id} episode={episode} />;
      })}
    </div>
  );
}

export default IndividualCollectionDetails;

// async function nameOfFunc() {

// }

// const nameOfFunc = async () => {

// }
