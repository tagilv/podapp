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
      const myHeaders = new Headers();
      myHeaders.append("App", "Viktor_app");
      myHeaders.append("X-ListenAPI-Key", process.env.REACT_APP_KEY);

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };
      const url = `https://jsonplaceholder.typicode.com/todos/${page}`;
      // const url = `https://cab-cors-anywhere.herokuapp.com/https://listen-api.listennotes.com/api/v2/curated_podcasts?page=${page}`;
      const response = await fetch(url, requestOptions);

      const result = await response.json();
      console.log("result", result);
      // setCollections(result.curated_lists);
      // setPage(result);

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
            {page !== 1 ? (
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

// <Container
//   sx={{
//     bgcolor: "lightgrey",
//     marginTop: "1vh",
//     marginBottom: "6vh",
//     display: "flex",
//     justifyContent: "space-around",
//   }}
// >
//   {page !== 0 && (
//     <button
//       type=""
//       onClick={() => {
//         setPage(page - 1);
//       }}
//     >
//       Previous Page
//     </button>
//   )}
//   <button
//     type=""
//     onClick={() => {
//       setPage(page + 1);
//     }}
//   >
//     Next Page
//   </button>
// </Container>;

// import React, { useSyncExternalStore } from "react";
// import { Link } from "react-router-dom";
// import { CardHeader, Box, Grid, Typography } from "@mui/material";
// import ListIcon from "@mui/icons-material/List";

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";

// import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
// import { Container } from "@mui/system";

// // Why do we need template literals in collections title? It brings in collections before (as root) since the collection is inside the collectionsS?

// const sxCollectionStyle = {
//   fontSize: 15,
//   display: "flex",
//   justifyContent: "center",
//   maxHeight: 45,
//   minHeight: 45,
//   alignItems: "start",
//   padding: "10rm",
// };

// function Collection({ collection }) {
//   return (
//     <>
//       <Grid item xs={12} md={6}>
//         <Container
//           to={`${collection.title}`}
//           state={{ collection: collection }}
//         >
//           <Card
//             elevation={2}
//             sx={{
//               borderRadius: 10,
//               backgroundColor: "white",
//               color: "black",
//               "&:hover": {
//                 backgroundColor: "pink",
//                 color: "#3c52b2",
//               },
//             }}
//           >
//             <CardContent sx={sxCollectionStyle}>
//               <div>
//                 <Typography
//                   sx={sxCollectionStyle}
//                   color="text.secondary"
//                   gutterBottom
//                 >
//                   {collection.title}
//                 </Typography>
//               </div>
//             </CardContent>
//           </Card>
//         </Container>
//       </Grid>
//     </>
//   );
// }

// export default Collection;

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
