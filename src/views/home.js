import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import poddappHome from "../assets/poddappHome.jpg";
import podd from "../assets/podd.jpg";
import { Button, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import Collections from "./Collections";

function Home() {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="sm">
        <h2>Explore curated Podcast Collections from XX</h2>
        <Box sx={{ bgcolor: "#cfe8fc", height: "70vh" }}>
          <CardMedia component="img" image={podd} alt="Paella dish" />
        </Box>
      </Container>
      <Button>
        <Link to="/collections">Start Now</Link>
      </Button>
    </div>
  );
}

export default Home;
