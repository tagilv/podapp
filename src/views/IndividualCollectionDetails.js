import React from "react";
import { useParams, useLocation } from "react-router-dom";

function IndividualCollectionDetails() {
  let params = useParams();

  const location = useLocation();
  // console.log("location", location);

  let poscastsIdArray = location.state.podcast;
  console.log("poscastsIdArray>>", poscastsIdArray);

  // Fetch individual episodes and print the

  return (
    <div>
      <h2>IndividualCollectionDetails here</h2>
    </div>
  );
}

export default IndividualCollectionDetails;
