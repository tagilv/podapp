// 1. Import hook:
import React, { createContext, useState } from "react";

// 2. Create Context/Store:
export const AuthContext = createContext();

// 3. Create Provider:
export const AuthContextProvider = (props) => {
  // For firebase, this is where you create the function to log in with user name and pw, function will be triggered from the loggin view but the function will be created here so you can get access to the data base AND set your user here so you can make the value of your user available in the places you want to make it available (as value={{user}} in the .Provider)
  const [user, setUser] = useState({});

  return (
    // Two {{}} to send tan object, thats why we need {} when receiveng them in the useContext too
    <AuthContext.Provider value={{ user, setUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

// 4. Move state and function:
