import React, { useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import podd from "../assets/podd.png";
import { Button, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

function Home() {
  const { user } = useContext(AuthContext);
  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: "lightgrey",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        {/* {user && <h2>Welcome back {user.displayName}</h2>} */}
        <Typography variant="h3">Welcome to Randopod</Typography>
        {/* <Typography variant="h6">Your collection of random podcasts</Typography> */}
        <Box>
          <CardMedia component="img" image={podd} alt="podcast image" />
        </Box>
        <Box
          sx={{
            height: "5vh",
            display: "flex",
            flexDirection: "column",
            // justifyContent: "space-around",
          }}
        >
          <Button
            variant="contained"
            component={Link}
            to={"/collections"}
            sx={{
              width: "35vw",
              paddingTop: "5",
              backgroundColor: "black",
              color: "white",
              "&:hover": {
                backgroundColor: "gray",
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default Home;

// before

// import React, { useContext } from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import podd from "../assets/podd.png";
// import { Button, CardMedia, Typography } from "@mui/material";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

// function Home() {
//   const { user } = useContext(AuthContext);
//   return (
//     <div>
//       {/* <CssBaseline /> */}
//       <Container
//         maxWidth="sm"
//         sx={{
//           bgcolor: "lightgrey",
//           height: "50vh",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "start",
//           alignItems: "center",
//         }}
//       >
//         {/* {user && <h2>Welcome back {user.displayName}</h2>} */}
//         <Typography variant="h3">Welcome to randopod..</Typography>
//         <Box sx={{ bgcolor: "#cfe8fc" }}>
//           <CardMedia component="img" image={podd} alt="podcast image" />
//         </Box>
//       </Container>
//       <Container
//         maxWidth="sm"
//         sx={{
//           bgcolor: "lightgrey",
//           height: "50vh",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           paddingBottom: "2vh",
//         }}
//       >
//         <Button
//           position="fixed"
//           variant="contained"
//           component={Link}
//           to={"/collections"}
//           sx={{ width: "35vw", backgroundColor: "#FCAF33", color: "black" }}
//         >
//           Get Started
//         </Button>
//       </Container>
//     </div>
//   );
// }

// export default Home;
