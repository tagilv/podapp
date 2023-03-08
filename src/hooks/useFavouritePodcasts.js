import { useEffect, useState } from "react";
import { getFavouritePodcasts } from "../api/favouritePodcasts";

function useFavouritePodcasts(uid, x) {
  // Brought in uid as argument, switched out user to uid in the rest
  const [favouritePodcasts, setFavouritePodcasts] = useState([]);

  useEffect(() => {
    uid &&
      getFavouritePodcasts(uid).then((favouritesArray) => {
        setFavouritePodcasts(favouritesArray);
      });
  }, [uid, x]);
  return favouritePodcasts;
}

export default useFavouritePodcasts;
