import { Grid, IconButton } from "@mui/material";
import { Navigate, Route } from "react-router";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import ListIcon from "@mui/icons-material/List";
import { AuthContext } from "../context/AuthContext";
import {
  setDoc,
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../config";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import useFavouritePodcasts from "../hooks/useFavouritePodcasts";
import FavoriteIcon from "@mui/icons-material/Favorite";

function Podcast({ podcast }) {
  const { user } = useContext(AuthContext);
  const [x, setX] = useState(false);

  // Function that takes value(user.uid), Below, value is gathered in const favouritePodcasts. Passing x into the hook (for the other page)
  const favouritePodcasts = useFavouritePodcasts(user?.uid, x);

  const handleAddFavouritePodcast = async (e) => {
    const favRef = doc(db, "Favourites", user.uid);
    //To check if doc exisits
    const docSnap = await getDoc(favRef);

    if (docSnap.exists()) {
      await updateDoc(favRef, {
        favs: arrayUnion(podcast),
      });
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      await setDoc(doc(db, "Favourites", user.uid), { favs: [podcast] });
    }
    setX(x ? false : true);
  };

  const handleRemoveFavouritePodcast = async (e) => {
    const favRef = doc(db, "Favourites", user.uid);

    //To check if doc exisits
    const docSnap = await getDoc(favRef);

    if (docSnap.exists()) {
      await updateDoc(favRef, {
        favs: arrayRemove(podcast),
      });
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    setX(x ? false : true);
  };

  return (
    <>
      <Grid
        sx={{
          marginBottom: "10vh",
        }}
        item
        xs={12}
        md={6}
      >
        <Card elevation={3}>
          <CardHeader
            action={
              <IconButton
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
                size="medium"
              >
                <Link to={`${podcast.title}`} state={{ podcastId: podcast.id }}>
                  {" "}
                  <ListIcon />
                </Link>

                {favouritePodcasts.some((individualPodcast) => {
                  return individualPodcast.id === podcast.id;
                }) ? (
                  <FavoriteIcon
                    sx={{
                      color: "red",
                    }}
                    onClick={handleRemoveFavouritePodcast}
                  />
                ) : (
                  <FavoriteBorderIcon
                    sx={{
                      color: "red",
                    }}
                    onClick={handleAddFavouritePodcast}
                  />
                )}
              </IconButton>
            }
            title={podcast.title}
            subheader={podcast.publisher}
          />
          <div width="50%">
            <CardMedia
              width="30%"
              component="img"
              height="350"
              image={podcast.thumbnail}
              alt=""
            />
          </div>
        </Card>
      </Grid>
    </>
  );
}

export default Podcast;
