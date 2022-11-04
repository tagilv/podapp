import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { dataFetchTwo } from "../data/dataFetchTwo.js";
import Episode from "../components/Episode";

function CollectionEpisodeDetails() {
  let params = useParams();

  const location = useLocation();
  console.log("location", location);

  let individualPodcastId = location.state.podcastId;
  console.log("individualPocastId>>", individualPodcastId);

  // console.log("dataFetchTwo>>", dataFetchTwo.episodes);
  // Use individualPocastId to fetch episodes and render this episodes in episodes component
  // State is always in the scope of the component

  const [episodes, setEpisodes] = useState([]);

  const fetchEpisodes = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/users`;
      const response = await fetch(url);
      const result = await response.json();
      setEpisodes(dataFetchTwo.episodes);
    } catch (error) {
      console.log(error);
    }
  };
  console.log("dataFetchTwo.episodes>>", dataFetchTwo.episodes);

  useEffect(() => {
    fetchEpisodes();
  }, []);

  return (
    <div>
      <h2>CollectionEpisodeDetails view here</h2>
      {episodes.map((episode) => {
        return <Episode key={episode.id} episode={episode} />;
      })}
    </div>
  );
}

export default CollectionEpisodeDetails;
