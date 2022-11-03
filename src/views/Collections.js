import React, { useEffect, useState } from "react";
import { dataFetchOne } from "../data/dataFetchOne.js";
import Collection from "../components/Collection.js";

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

  const fetchCollectionsAsync = async () => {
    try {
      const url = "https://jsonplaceholder.typicode.com/users";
      const response = await fetch(url);
      const result = await response.json();
      setCollections(dataFetchOne.curated_lists);

      console.log("async results", dataFetchOne.curated_lists);
      console.log("dataFetchOne", dataFetchOne);
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
      <h2>Collections here</h2>
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
