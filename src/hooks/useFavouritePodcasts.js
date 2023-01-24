import { useEffect, useState } from "react";
import { getFavouritePodcasts } from "../api/favouritePodcasts";

function useFavouritePodcasts(uid, x) {
  // Brought in uid as argument, switched out user to uid in the rest
  const [favouritePodcasts, setFavouritePodcasts] = useState([]);

  // const [first, setfirst] = useState(second)

  // Use effect close to set state..
  useEffect(() => {
    console.log("testing");
    // has an argument so need to pass that in
    // then((returninerar return valuet av getfavoritepodcasts))
    uid &&
      getFavouritePodcasts(uid).then((favouritesArray) => {
        setFavouritePodcasts(favouritesArray);
      });
  }, [uid, x]);
  return favouritePodcasts;
}

export default useFavouritePodcasts;

// Function that does use state and use effect
// Can return different values if user uid changes
// Fucntion runs in every rencder but getfaoutitepodcasts will only run when user id chnages
