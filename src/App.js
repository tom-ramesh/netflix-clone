import "./App.css";
import wordings from "./wordings";
import Row from "./components/Row/Row";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import requests from "./requests";

function App() {
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
        <Row {...props} />
      ))}
    </div>
  );
}

export default App;
