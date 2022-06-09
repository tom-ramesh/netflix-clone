import { useState } from "react";
import Row from "./components/Row/Row";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import DetailSlider from "./components/DetailSlider/DetailSlider";
import requests from "./requests";
import wordings from "./wordings";
import "./App.css";

function App() {
  const [id, setId] = useState("");
  const [sliderOpen, toggleSlider] = useState(false);

  const rowProps = [
    {
      key: 1,
      title: wordings.netflixOriginals,
      fetchUrl: requests.fetchNetflixOriginals,
      isLarge: true,
    },
    {
      key: 2,
      title: wordings.trendingNow,
      fetchUrl: requests.fetchTrending,
    },
    {
      key: 3,
      title: wordings.topRated,
      fetchUrl: requests.fetchTopRated,
    },
    {
      key: 4,
      title: wordings.actionMovies,
      fetchUrl: requests.fetchActionMovies,
    },
    {
      key: 5,
      title: wordings.comedyMovies,
      fetchUrl: requests.fetchComedyMovies,
    },
    {
      key: 6,
      title: wordings.horrorMovies,
      fetchUrl: requests.fetchHorrorMovies,
    },
    {
      key: 7,
      title: wordings.romanceMovies,
      fetchUrl: requests.fetchRomanceMovies,
    },
    {
      key: 8,
      title: wordings.documentaries,
      fetchUrl: requests.fetchDocumentaries,
    },
  ];
  return (
    <div className="app">
      <Navbar />
      <Banner />
      {rowProps.map((props) => (
        <Row
          {...props}
          setId={setId}
          toggleSlider={toggleSlider}
          slider={sliderOpen}
        />
      ))}
      <DetailSlider
        movieId={id}
        isOpen={sliderOpen}
        toggleOpen={toggleSlider}
      />
    </div>
  );
}

export default App;
