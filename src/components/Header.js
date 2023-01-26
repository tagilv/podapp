import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

function Header() {
  return (
    <div>
      <Container
        sx={{
          bgcolor: "",
          display: "flex",
          alignItems: "center",
          padding: 4,
        }}
      >
        <Typography variant="h4">This week's Podcasts</Typography>
      </Container>
    </div>
  );
}

export default Header;
