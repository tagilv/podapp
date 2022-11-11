import "./App.css";
import { Routes, Route } from "react-router-dom";
import Collections from "./views/Collections";
import Home from "./views/Home";
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

// In routes, you need to use the :title as it is in the api? No you dont but should you?

function App() {
  const myStyle = {
    borderBottom: "solid 1px",
    paddingBottom: "1rem",
  };

  console.log("auth", auth);

  return (
    <div className="App">
      <AuthContextProvider>
        <TopNavbar />
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="/" element={<Home />} />
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
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Navbar />
      </AuthContextProvider>
    </div>
  );
}

export default App;
