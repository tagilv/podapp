// 1. Import hook:
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
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

  const register = async (email, password) => {
    // console.log("email, password", email);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // console.log("userCredential>>", userCredential);
      navigate("/login");
    } catch (error) {
      alert(error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error>>", error);
      // console.log("error message>>", error.message);
    }
  };

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

    // signOut(auth)
    //   .then(() => {
    //     // Sign-out successful.
    //   })
    //   .catch((error) => {
    //     // An error happened.
    //   });
  };

  // Will run once when the component loads and not more
  useEffect(() => {
    checkUserLoginStatus();
  }, []);

  return (
    // Two {{}} to send tan object, thats why we need {} when receiveng them in the useContext too
    <AuthContext.Provider
      value={{ user, setUser, register, login, isLoading, logout }}
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
