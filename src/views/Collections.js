import React, { useEffect, useState } from "react";
import { dataFetchOne } from "../data/dataFetchOne.js";
import Collection from "../components/Collection.js";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";

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

      console.log("dataFetchOne", dataFetchOne);
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
      <Container>
        <Typography variant="h6">
          This week's curated List of Podcasts!
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

        {page !== 0 && (
          <button
            type=""
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Previous Page
          </button>
        )}
        <button
          type=""
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Next Page
        </button>
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
