import "./App.css";
import { Routes, Route } from "react-router-dom";
import Collections from "./views/Collections";
import Home from "./views/Home.js";
import Profile from "./views/Profile";
import Navbar from "./components/Navbar";
import NoMatch from "./views/NoMatch";
import CollectionPodcastsDetails from "./views/CollectionPodcastsDetails";
import CollectionEpisodeDetails from "./views/CollectionEpisodeDetails";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import TopNavbar from "./components/TopNavbar";
import Login from "./views/Login";
import { app } from "./config";
import { auth } from "./config";
import Register from "./views/Register";
import Chat from "./views/Chat";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  console.log("auth", auth);

  const theme = createTheme({
    typography: {
      fontFamily: ["Space Mono", "monospace"].join(","),
    },
  });

  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeProvider theme={theme}>
          <TopNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="collections" element={<Collections />} />

            <Route
              path="/collections/:title"
              element={<CollectionPodcastsDetails />}
            />
            <Route
              path="/collections/:title/:podcast"
              element={
                <ProtectedRoute>
                  <CollectionEpisodeDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="chat"
              element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
          <Navbar />
        </ThemeProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
