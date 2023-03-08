import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import Episode from "../components/Episode";
import { Container } from "@mui/material";
import Audioplayer from "../components/Audioplayer.js";

function CollectionEpisodeDetails() {
  let params = useParams();

  const location = useLocation();
  let individualPodcastId = location.state.podcastId;

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

      if (response.ok) {
        const result = await response.json();
        setEpisodes(result.episodes);
      } else {
        const res = await fetch(`/api/podcasts/${individualPodcastId}.json`);
        const data = await res.json();
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
