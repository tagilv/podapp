import { doc, getDoc } from "firebase/firestore";
import { db } from "../config";

// Only need uid since getting the podcast by uid not user
const getFavouritePodcasts = async (uid) => {
  try {
    const favRef = doc(db, "Favourites", uid);

    const querySnapshot = await getDoc(favRef);
    console.log("querySnapshot", querySnapshot.data());

    const favouritesArray = querySnapshot.data().favs;
    return favouritesArray;
  } catch (error) {
    console.log(error);
    return [];
    // If an error its always an array and not undefined
  }
};

export { getFavouritePodcasts };
