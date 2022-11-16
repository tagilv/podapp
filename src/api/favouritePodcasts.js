import { doc, getDoc } from "firebase/firestore";
import { db } from "../config";

// Only need uid sience you are gettgin the podcast by uid not user
const getFavouritePodcasts = async (uid) => {
  try {
    // Get the place that this user (uid) owns in the three
    const favRef = doc(db, "Favourites", uid);

    const querySnapshot = await getDoc(favRef);
    console.log("querySnapshot", querySnapshot.data());

    const favouritesArray = querySnapshot.data().favs;
    // Return the value. Cant declare and retunr on the same line
    return favouritesArray;
  } catch (error) {
    console.log(error);
  }
};

export { getFavouritePodcasts };
