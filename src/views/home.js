import React, { useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import poddappHome from "../assets/poddappHome.jpg";
import podd from "../assets/podd.jpg";
import { Button, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Home() {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="sm">
        {/* {user && <h2>Welcome back {user.displayName}</h2>} */}
        <h2>Explore our curated Podcasts!</h2>
        <Box sx={{ bgcolor: "#cfe8fc" }}>
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
