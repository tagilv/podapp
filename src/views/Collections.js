import React, { useEffect, useState } from "react";
import { dataFetchOne } from "../data/dataFetchOne.js";
import Collection from "../components/Collection.js";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Hero from "../components/Hero.js";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function Collections() {
  const [collections, setCollections] = useState([]);
  const [error, setError] = useState(null);

  const [page, setPage] = useState(1);

  const fetchCollectionsAsync = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/todos/${page}`;
      // const url = `https://jsonplaceholder.typicode.com/users/${page}`;
      const response = await fetch(url);
      const result = await response.json();
      setCollections(dataFetchOne.curated_lists);
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
          <p>No collections</p>
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
            {page !== 0 ? (
              <button
                type=""
                onClick={() => {
                  setPage(page - 1);
                }}
              >
                <ArrowBackIcon />
              </button>
            ) : (
              <button>
                <FirstPageIcon />
              </button>
            )}
            <button
              type=""
              onClick={() => {
                setPage(page + 1);
              }}
            >
              <ArrowForwardIcon />
            </button>
          </Container>
        </Container>
      </Container>
    </div>
  );
}

export default Collections;

// Add before live fetch:
// 1.
// var myHeaders = new Headers();
// myHeaders.append("App", "Viktor_app");
// myHeaders.append("X-ListenAPI-Key", process.env.REACT_APP_KEY);

// var requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow",
// };

// 2.
// Check that error message working
