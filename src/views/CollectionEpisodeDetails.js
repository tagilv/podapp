import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { dataFetchTwo } from "../data/dataFetchTwo.js";
import Episode from "../components/Episode";
import { Container } from "@mui/material";
import Audioplayer from "../components/Audioplayer.js";

function CollectionEpisodeDetails() {
  let params = useParams();

  const location = useLocation();
  console.log("location", location);
  let individualPodcastId = location.state.podcastId;
  // console.log("individualPocastId>>", individualPodcastId);

  // console.log("dataFetchTwo>>", dataFetchTwo.episodes);
  // Use individualPocastId to fetch episodes and render this episodes in episodes component
  // State is always in the scope of the component

  const [episodes, setEpisodes] = useState([]);

  const fetchEpisodes = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("App", "Viktor_app");
      myHeaders.append("X-ListenAPI-Key", process.env.REACT_APP_KEY);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      const url = `https://jsonplaceholder.typicode.com/users`;
      // const url = `https://cab-cors-anywhere.herokuapp.com/https://listen-api.listennotes.com/api/v2/podcasts/${location.state.podcastId}`;
      const response = await fetch(url, requestOptions);
      console.log("response", response);
      const result = await response.json();
      console.log("result", result);
      setEpisodes(dataFetchTwo.episodes);
      // setEpisodes(result.episodes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEpisodes();
  }, []);

  return (
    <div>
      <Container
        sx={{
          bgcolor: "lightgrey",
        }}
      >
        {episodes.map((episode) => {
          return (
            <>
              <Episode key={episode.id} episode={episode} />
              <Audioplayer key={episode.audio} episode={episode} />
            </>
          );
        })}
      </Container>
    </div>
  );
}

export default CollectionEpisodeDetails;
