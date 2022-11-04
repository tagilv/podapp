import React from "react";
import { Link } from "react-router-dom";

// Why do we need template literals in collections title? It brings in collections before (as root) since the collection is inside the collectionsS?

function Collection({ collection }) {
  return (
    <div>
      <h2>Collection Componant:</h2>
      <h2>{collection.title}</h2>
      <Link to={`${collection.title}`} state={{ collection: collection }}>
        {collection.title}
      </Link>
    </div>
  );
}

export default Collection;
