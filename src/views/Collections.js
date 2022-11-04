import React, { useEffect, useState } from "react";
import { dataFetchOne } from "../data/dataFetchOne.js";
import Collection from "../components/Collection.js";

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
      console.log(result);
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

  // put page

  return (
    <div>
      <h2>Collections view here:</h2>
      {collections ? (
        collections.map((collection) => {
          return <Collection key={collection.id} collection={collection} />;
        })
      ) : (
        <p>No collections</p>
      )}
      {error && <p>{error}</p>}

      <button
        type=""
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Next Page
      </button>
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
