import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const sxCollectionStyle = {
  fontSize: 14,
  display: "flex",
  justifyContent: "center",
  maxHeight: 45,
  minHeight: 45,
  alignItems: "center",
  padding: 2,
  bgcolor: "#FF4F79",
};

const sxCollectionTypographyStyle = {
  fontSize: 14,
  display: "flex",
  justifyContent: "center",
  padding: 2,
  bgcolor: "#FF4F79",
  width: "90%",
  p: 1,
};

function Collection({ collection }) {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            borderRadius: 15,
          }}
          elevation={2}
        >
          <CardContent sx={sxCollectionStyle}>
            <Typography
              variant="body2"
              component="div"
              sx={sxCollectionTypographyStyle}
              color="text.secondary"
            >
              {collection.title}
            </Typography>

            <Button
              sx={{
                maxWidth: "30px",
                maxHeight: "30px",
                minWidth: "30px",
                minHeight: "30px",
              }}
              component={Link}
              to={`${collection.title}`}
              state={{ collection: collection }}
            >
              <KeyboardArrowRightIcon
                sx={{
                  color: "black",
                }}
              />
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default Collection;
