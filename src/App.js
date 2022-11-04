import "./App.css";
import { Routes, Route } from "react-router-dom";
import Collections from "./views/Collections";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Navbar from "./components/Navbar";
import NoMatch from "./views/NoMatch";
import CollectionPodcastsDetails from "./views/CollectionPodcastsDetails";
import CollectionEpisodeDetails from "./views/CollectionEpisodeDetails";

// In routes, you need to use the :title as it is in the api? No you dont but should you?

function App() {
  const myStyle = {
    borderBottom: "solid 1px",
    paddingBottom: "1rem",
  };

  return (
    <div className="App">
      <h2 className="my-style"></h2>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="collections" element={<Collections />} />
        <Route
          path="/collections/:title"
          element={<CollectionPodcastsDetails />}
        />
        {/* // new */}
        <Route
          path="/collections/:title/:podcast"
          element={<CollectionEpisodeDetails />}
        />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      {/* <Collections /> */}
    </div>
  );
}

export default App;
