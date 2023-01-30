import React, { useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import { CardHeader, Box, Grid, Typography, createTheme } from "@mui/material";
import ListIcon from "@mui/icons-material/List";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// Why do we need template literals in collections title? It brings in collections before (as root) since the collection is inside the collectionsS?

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
  // maxHeight: 30,
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

                // justifyContent: "end",
              }}
              component={Link}
              to={`${collection.title}`}
              state={{ collection: collection }}
            >
              {/* <div style={{ direction: "row" }} size="small"> */}
              {/* <Button>Explore</Button> */}
              <KeyboardArrowRightIcon
                sx={{
                  color: "black",
                }}
              />
              {/* </div> */}
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}

export default Collection;

{
  /* <CardActions>
            <Link
              underline="none"
              to={`${collection.title}`}
              state={{ collection: collection }}
            >
              <Button size="small">Explore</Button>
            </Link>
          </CardActions> */
}

// import React from "react";
// import { styled } from "@mui/material/styles";
// import Card from "@mui/material/Card";
// import CardHeader from "@mui/material/CardHeader";
// import CardMedia from "@mui/material/CardMedia";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import Collapse from "@mui/material/Collapse";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import { red } from "@mui/material/colors";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShareIcon from "@mui/icons-material/Share";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MoreVertIcon from "@mui/icons-material/MoreVert";

// const ExpandMore = styled((props) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
//   marginLeft: "left",
//   transition: theme.transitions.create("transform", {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card>
//       <CardHeader subheader="Shrimp and Chorizo Paella" />
//       <CardActions disableSpacing>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and
//             set aside for 10 minutes.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }
