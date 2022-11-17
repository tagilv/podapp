import { Podcasts } from "@mui/icons-material";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import useFavouritePodcasts from "../hooks/useFavouritePodcasts";

function Profile() {
  // Thanks to useContext you can cinsume the info in user object
  const { user, checkUserLoginStatus } = useContext(AuthContext);

  useEffect(() => {
    // getUserInformation()
    checkUserLoginStatus();
  }, []);

  // Get the value of this using const favouritePodcast
  const favouritePodcasts = useFavouritePodcasts(user.uid);
  // console.log("favouritePodcasts>>", favouritePodcasts);

  return (
    <div style={{ backgroundColor: "red", height: "70vh" }}>
      <h2>Welcome {user?.displayName}"</h2>
      {favouritePodcasts.map((favouritePodcast) => {
        return <p key={favouritePodcast.id}>{favouritePodcast.title}</p>;
      })}
      <h6>In the future you will find messages and favourites here..</h6>
    </div>
  );
}

export default Profile;

{
  /* return (
        <div>
        <h2>Welcome {user?.displayName}"</h2>
        {favouritePodcasts.map((favouritePodcast) => {
          return <p>{favouritePodcast.id}</p>;
        })}

        <h6>In the future you will find messages and favourites here..</h6>
        </div>
      ); */
}

// for (const id in favouritePodcasts) {
// }
{
  /* //   const result = `${id}: ${favouritePodcasts[id]}`;
      //   JSON.stringify(result);
      //   console.log(result); */
}

// {
//   Object.entries(favouritePodcasts).forEach(([key, value]) => {
//     return <p>{`${key}: ${value}`}</p>;
//   });
// }
