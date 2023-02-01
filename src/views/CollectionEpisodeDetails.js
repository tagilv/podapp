import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { dataFetchTwo } from "../data/dataFetchTwo.js";
import Episode from "../components/Episode";
import { Container } from "@mui/material";
import Audioplayer from "../components/Audioplayer.js";

function CollectionEpisodeDetails() {
  let params = useParams();
  console.log("params", params);

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
      // myHeaders.append("App", "Viktor_app");
      myHeaders.append("X-ListenAPI-Key", process.env.REACT_APP_KEY);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      const url = `https://listen-api.listennotes.com/api/v2/podcasts/${location.state.podcastId}`;
      const response = await fetch(url, requestOptions);

      console.log(location.state.podcastId);
      console.log("ind podcasts response", response);

      if (response.ok) {
        const result = await response.json();
        setEpisodes(result.episodes);
      } else {
        const res = await fetch(`/api/podcasts/${individualPodcastId}.json`);
        console.log("individualPodcastId", individualPodcastId);
        console.log("res from data", res);
        const data = await res.json();
        console.log(data);

        setEpisodes(data.episodes);
      }
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
