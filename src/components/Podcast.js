import { Grid, IconButton } from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import ListIcon from "@mui/icons-material/List";
import { AuthContext } from "../context/AuthContext";
import {
  setDoc,
  collection,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "../config";
import CardContent from "@mui/material/CardContent";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Podcast({ podcast }) {
  const { user } = useContext(AuthContext);
  const [favouritePodcasts, setFavouritePodcasts] = useState([]);

  // console.log("doc>>", doc);

  const getFavouritePodcasts = async () => {
    try {
      const favRef = doc(db, "Favourites", user.uid);

      const querySnapshot = await getDoc(favRef);
      console.log("querySnapshot", querySnapshot.data());

      const favouritesArray = querySnapshot.data().favs;

      setFavouritePodcasts(favouritesArray);

      // setFavouritePodcasts(querySnapshot.data().favs);

      // const favouritePodcasts = [];
      // querySnapshot.forEach((doc) => {
      //   // console.log("doc>>", doc);
      //   console.log(`${doc.id} => ${doc.data()}`);
      //   favouritePodcasts.push(doc.data());
      //   // console.log("favouritePodcasts", favouritePodcasts);
      // });
    } catch (error) {
      console.log(error);
    }
  };
  console.log("favouritePodcasts>>", favouritePodcasts);
  // getFavouritePodcasts();

  const handleAddFavouritePodcast = async (e) => {
    // console.log("podcast.id>>", podcast.id);
    // console.log("user.auth.currentUser.email>", user.auth.currentUser.email);
    // console.log("clicked");
    // console.log("podcast>>", podcast);
    const favRef = doc(db, "Favourites", user.uid);
    // Atomically add a new region to the "regions" array field.

    //To check if doc exisits
    const docSnap = await getDoc(favRef);

    if (docSnap.exists()) {
      await updateDoc(favRef, {
        favs: arrayUnion(podcast),
      });
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
      await setDoc(doc(db, "Favourites", user.uid), { favs: [podcast] });
    }

    //   const docRef = await setDoc(collection(db, "Favourites"), {
    //     author: user.email,
    //     podcast,
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    //   console.log("user.email>>", user.email);
    //   console.log("user>>", user);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
    console.log("podcast added as favorite>>", podcast);
  };

  const handleRemoveFavouritePodcast = async (e) => {
    // console.log("podcast.id>>", podcast.id);
    // console.log("user.auth.currentUser.email>", user.auth.currentUser.email);
    // console.log("clicked");
    // console.log("podcast>>", podcast);
    const favRef = doc(db, "Favourites", user.uid);
    // Atomically add a new region to the "regions" array field.

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
      // await setDoc(doc(db, "Favourites", user.uid), { favs: [podcast] });
    }

    //   const docRef = await setDoc(collection(db, "Favourites"), {
    //     author: user.email,
    //     podcast,
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    //   console.log("user.email>>", user.email);
    //   console.log("user>>", user);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
    console.log("podcast added as favorite>>", podcast);
  };

  useEffect(() => {
    user && getFavouritePodcasts();
  }, [user]);

  return (
    <>
      <Grid item xs={12} md={6}>
        <Card elevation={3}>
          <CardHeader
            action={
              <IconButton size="medium">
                <Link to={`${podcast.title}`} state={{ podcastId: podcast.id }}>
                  <ListIcon />
                </Link>
              </IconButton>
            }
            title={podcast.title}
            subheader={podcast.publisher}
          />
          <h2>Add favourite</h2>
          <FavoriteBorderIcon onClick={handleAddFavouritePodcast} />
          <h2>Remove favourite</h2>
          <FavoriteBorderIcon onClick={handleRemoveFavouritePodcast} />
          <div width="50%">
            <CardMedia
              width="50%"
              component="img"
              height="194"
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

// React Hook use context cannot be called at the top level. React hooks must be c alled in a react fucntion component or a custom react hook fucntion
