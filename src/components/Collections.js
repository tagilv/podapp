import React, { useEffect, useState } from "react";
import { data } from "../data/data.js";
import Collection from "./Collection.js";

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

function Collections() {
  const [collections, setCollections] = useState([]);
  const [error, setError] = useState(null);

  // const fetchCollections = () => {
  //   // const url = data;
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       setCollections(data.curated_lists);
  //       console.log(data.curated_lists);
  //     })
  //     .catch((error) => {
  //       setError(error.message);
  //       console.log(error);
  //     });
  // };

  const fetchCollectionsAsync = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url);
      const result = await response.json();
      setCollections(data.curated_lists);

      console.log("async results", data.curated_lists);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCollectionsAsync();
    // fetchCollections();
  }, []);

  return (
    <div>
      <h2>Collections</h2>
      {collections ? (
        collections.map((collection) => {
          return <Collection key={collection.id} collection={collection} />;
        })
      ) : (
        <p>No collections</p>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default Collections;
