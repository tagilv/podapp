import React, { useEffect, useState } from "react";
import Collection from "../components/Collection.js";
import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Hero from "../components/Header.js";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

function Collections() {
  const [collections, setCollections] = useState([]);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(2);

  const fetchCollectionsAsync = async () => {
    try {
      const myHeaders = new Headers();
      // myHeaders.append("App", "Viktor_app");
      myHeaders.append("X-ListenAPI-Key", process.env.REACT_APP_KEY);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      const url = `https://listen-api.listennotes.com/api/v2/curated_podcasts?page=${page}`;

      const response = await fetch(url, requestOptions);

      if (response.ok) {
        const result = await response.json();
        setCollections(result.curated_lists);
      } else {
        const res = await fetch("/api/Collections/response.json");
        const data = await res.json();
        setCollections(data.curated_lists);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCollectionsAsync();
  }, [page]);

  return (
    <div>
      <Container
        sx={{
          bgcolor: "lightgrey",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Hero />
        <Typography variant="h6"></Typography>
        {collections ? (
          <Grid container spacing={2}>
            {collections.map((collection) => {
              return <Collection key={collection.id} collection={collection} />;
            })}
          </Grid>
        ) : (
          <Container
            sx={{
              bgcolor: "lightgrey",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <p>No collections</p>
          </Container>
        )}
        {error && <p>{error}</p>}
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Container
            sx={{
              bgcolor: "lightgrey",
              marginTop: "1vh",
              marginBottom: "6vh",
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {page !== 1 ? (
              <KeyboardArrowLeftIcon
                onClick={() => {
                  setPage(page - 1);
                }}
              />
            ) : (
              <FirstPageIcon />
            )}
            <KeyboardArrowRightIcon
              type=""
              onClick={() => {
                setPage(page + 1);
              }}
            />
          </Container>
        </Container>
        <Box></Box>
      </Container>
    </div>
  );
}

export default Collections;
