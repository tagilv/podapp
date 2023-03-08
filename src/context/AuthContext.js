import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../config";

export const AuthContext = createContext();

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate("");
  const [isLoading, setIsLoading] = useState(true);

  const register = async (email, password, username) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const currentUser = await updateProfile(auth.currentUser, {
        displayName: username,
        // photoURL: "https://example.com/jane-q-user/profile.jpg",
      });
      setUser(userCredential);
      navigate("/profile");
    } catch (error) {
      alert(error.message);
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error>>", error);
    }
  };

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
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
        // User is signed in
        const uid = user.uid;
        setUser(user);
        setIsLoading(false);
      } else {
        // User is signed out
        setUser(null);
        setIsLoading(false);
      }
    });
  };

  const logout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    checkUserLoginStatus();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        register,
        login,
        isLoading,
        logout,
        checkUserLoginStatus,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
