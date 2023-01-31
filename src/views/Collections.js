import React, { useEffect, useState } from "react";
import { dataFetchOne } from "../data/dataFetchOne.js";
import Collection from "../components/Collection.js";
import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Hero from "../components/Header.js";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import style from "../style/style.css";

function Collections() {
  const [collections, setCollections] = useState([]);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(2);

  const fetchCollectionsAsync = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("App", "Viktor_app");
      myHeaders.append("X-ListenAPI-Key", process.env.REACT_APP_KEY);
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Access-Control-Allow-Origin", "*");
      myHeaders.append(
        "Access-Control-Allow-Origin",
        "https://podapp-reactjsapp.vercel.app"
      );

      // myHeaders.append("access-control-allow-headers", "*");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
        // mode: "no-cors",
      };
      // const url = `https://jsonplaceholder.typicode.com/todos/${page}`;
      const url = `https://listen-api.listennotes.com/api/v2/curated_podcasts?page=${page}`;
      console.log("url fetching from", url);
      const response = await fetch(url, requestOptions);

      const result = await response.json();
      console.log("result", result);
      setCollections(result.curated_lists);
      setPage(result);

      // setCollections(dataFetchOne.curated_lists);
      // setPage(result);
      console.log("page>", page);

      // console.log("dataFetchOne", dataFetchOne);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCollectionsAsync();
    // fetchCollections();
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
        <Typography variant="h6">
          {/* This week's curated List of Podcasts! */}
        </Typography>
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

// save for later

// bgcolor: "#FFB49A",
// bgcolor: "#FF4F79",
