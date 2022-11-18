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

// Alt 2

import React, { useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import { CardHeader, Box, Grid, Typography } from "@mui/material";
import ListIcon from "@mui/icons-material/List";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

// Why do we need template literals in collections title? It brings in collections before (as root) since the collection is inside the collectionsS?

const sxCollectionStyle = {
  fontSize: 15,
  display: "flex",
  justifyContent: "end",
  maxHeight: 45,
  minHeight: 45,
  alignItems: "center",
};

function Collection({ collection }) {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            borderRadius: 10,
          }}
          elevation={2}
          max
        >
          <CardContent sx={sxCollectionStyle}>
            <div>
              <Typography
                sx={sxCollectionStyle}
                color="text.secondary"
                gutterBottom
              >
                {collection.title}
              </Typography>
            </div>
            <Button
              component={Link}
              to={`${collection.title}`}
              state={{ collection: collection }}
            >
              {/* <div style={{ direction: "row" }} size="small"> */}
              {/* <Button>Explore</Button> */}
              <KeyboardArrowRightIcon />
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
