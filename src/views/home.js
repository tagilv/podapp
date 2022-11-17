import React, { useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import podd from "../assets/podd.jpg";
import { Button, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      {/* <CssBaseline /> */}
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: "lightgrey",
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        {/* {user && <h2>Welcome back {user.displayName}</h2>} */}
        <h2>Discover your favourite Podcasts!</h2>
        <Box sx={{ bgcolor: "#cfe8fc" }}>
          <CardMedia component="img" image={podd} alt="podcast image" />
        </Box>
      </Container>
      <Container
        maxWidth="sm"
        sx={{
          bgcolor: "lightgrey",
          height: "15vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: "2vh",
        }}
      >
        <Button
          variant="contained"
          component={Link}
          to={"/collections"}
          sx={{ width: "35vw", backgroundColor: "#FCAF33", color: "black" }}
        >
          START
        </Button>
      </Container>
    </div>
  );
}

export default Home;
