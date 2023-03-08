import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import podd from "../assets/podd.png";
import { Button, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
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
        <Typography variant="h3">Welcome to randopod</Typography>
        <Box>
          <CardMedia component="img" image={podd} alt="podcast image" />
        </Box>
        <Box
          sx={{
            height: "5vh",
            display: "flex",
            flexDirection: "column",
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
