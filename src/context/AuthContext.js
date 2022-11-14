// 1. Import hook:
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config";

// 2. Create Context/Store:
export const AuthContext = createContext();

// 3. Create Provider:
export const AuthContextProvider = (props) => {
  // For firebase, this is where you create the function to log in with user name and pw, function will be triggered from the loggin view but the function will be created here so you can get access to the data base AND set your user here so you can make the value of your user available in the places you want to make it available (as value={{user}} in the .Provider)
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const register = async (email, password, username) => {
    // console.log("email, password", email);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("displayName", username);
      const currentUser = await updateProfile(auth.currentUser, {
        displayName: username,
        // photoURL: "https://example.com/jane-q-user/profile.jpg",
      });
      // updateProfile(auth.currentUser, {
      //   displayName: username,
      //   // photoURL: "https://example.com/jane-q-user/profile.jpg",
      // })
      //   .then(() => {
      //     // Profile updated!
      //     // ...

      //   })
      //   .catch((error) => {
      //     // An error occurred
      //     // ...
      //     console.log("error", error);
      //   });
      console.log("currentUser>>", currentUser);
      setUser(currentUser);
      navigate("/login");
    } catch (error) {
      alert(error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error>>", error);
      // console.log("error message>>", error.message);
    }
  };

  // updateProfile(auth.currentUser, {
  //   displayName = currentUser.displayName,
  //   photoURL = "https://example.com/jane-q-user/profile.jpg",
  // })
  //   .then(() => {
  //     // Profile updated!
  //     // ...
  //   })
  //   .catch((error) => {
  //     // An error occurred
  //     // ...
  //   });

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("Login user>>", userCredential);
      console.log("Login user.user>>", userCredential.user);
      setUser(userCredential.user);
      navigate("/collections");
    } catch (error) {
      alert(error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Login error>>", error);
    }
  };

  const checkUserLoginStatus = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log("user", user);
        setUser(user);
        setIsLoading(false);
        console.log("user is logged in");
      } else {
        // User is signed out
        console.log("user is logged in");
        setUser(null);
        setIsLoading(false);
      }
    });
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };

  // Will run once when the component loads and not more
  useEffect(() => {
    checkUserLoginStatus();
  }, []);

  // const getUserInformation = () => {
  //   if (user !== null) {
  //     // The user object has basic properties such as display name, email, etc.
  //     const displayName = user.displayName;
  //     const email = user.email;
  //     const photoURL = user.photoURL;
  //     const emailVerified = user.emailVerified;

  //     // The user's ID, unique to the Firebase project. Do NOT use
  //     // this value to authenticate with your backend server, if
  //     // you have one. Use User.getToken() instead.
  //     const uid = user.uid;
  //   }
  // };

  return (
    // Two {{}} to send tan object, thats why we need {} when receiveng them in the useContext too
    <AuthContext.Provider
      value={{
        user,
        setUser,
        register,
        login,
        isLoading,
        logout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

// 4. Move state and function:

// // 1. Import hook:
// import {
//   createUserWithEmailAndPassword,
//   getAuth,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
// } from "firebase/auth";
// import React, { createContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../config";

// // 2. Create Context/Store:
// export const AuthContext = createContext();

// // 3. Create Provider:
// export const AuthContextProvider = (props) => {
//   // For firebase, this is where you create the function to log in with user name and pw, function will be triggered from the loggin view but the function will be created here so you can get access to the data base AND set your user here so you can make the value of your user available in the places you want to make it available (as value={{user}} in the .Provider)
//   const [user, setUser] = useState({});
//   const navigate = useNavigate();

//   const register = async (email, password) => {
//     // console.log("email, password", email);
//     try {
//       const userCredential = await createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       console.log("userCredential>>", userCredential);
//       navigate("/login");
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("error>>", error);
//     }
//   };

//   const login = async (email, password) => {
//     try {
//       const userCredential = await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );
//       console.log("Login user>>", userCredential);
//       console.log("Login user.user>>", userCredential.user);
//       setUser(userCredential.user);
//       navigate("/collections");
//     } catch (error) {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("Login error>>", error);
//     }
//   };

//   const checkUserLoginStatus = () => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         // User is signed in, see docs for a list of available properties
//         // https://firebase.google.com/docs/reference/js/firebase.User
//         const uid = user.uid;
//         setUser(user);
//         console.log("user is logged in");
//       } else {
//         // User is signed out
//         console.log("user is logged in");

//         setUser({});
//       }
//     });
//   };

//   // Will run once when the component loads and not more
//   useEffect(() => {
//     checkUserLoginStatus();
//     setIsLoading(false);
//   }, []);

//   return (
//     // Two {{}} to send tan object, thats why we need {} when receiveng them in the useContext too
//     <AuthContext.Provider value={{ user, setUser, register, login }}>
//       {props.children}
//     </AuthContext.Provider>
//   );
// };

// // 4. Move state and function:
