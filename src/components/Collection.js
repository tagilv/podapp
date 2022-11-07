import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import ListIcon from "@mui/icons-material/List";

// Why do we need template literals in collections title? It brings in collections before (as root) since the collection is inside the collectionsS?

function Collection({ collection }) {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Typography color="secondary">
          {collection.title}
          <Link
            underline="none"
            to={`${collection.title}`}
            state={{ collection: collection }}
          >
            <br />
            <ListIcon />
          </Link>
        </Typography>
      </Grid>
    </>
  );
}

export default Collection;
