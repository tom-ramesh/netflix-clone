import React, { useEffect, useState } from "react";
import axios from "../../axios";
import requests from "../../requests";
import movieTrailer from "movie-trailer";
import Youtube from "react-youtube";
import { ArrowForward } from "@material-ui/icons";
import wordings from "./wordings";
import "./detailSlider.css";

const DetailSlider = ({ movieId, toggleOpen, isOpen }) => {
  const [movieData, setMovieData] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    return () => {
      toggleOpen(false);
      setMovieData({});
      setTrailerUrl("");
    };
  }, []);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        `/movie/${movieId}${requests.fetchMovieDetails}`
      );
      setMovieData(request.data);
      return request;
    }
    fetchData();
  }, [movieId]);

  useEffect(() => {
    if (movieData) {
      movieTrailer(movieData?.original_title || movieData?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  }, [movieData]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoPlay: 1,
    },
  };

  const details = [
    { label: wordings.releaseDate, value: movieData?.release_date, key: 1 },
    { label: wordings.runTime, value: movieData?.runtime + " min", key: 2 },
    { label: wordings.rating, value: movieData?.vote_average, key: 3 },
  ];

  return (
    <div className={`slider__body ${isOpen && "slider__body-open"}`}>
      <ArrowForward
        className={`slider__back-btn ${!isOpen && "back-btn__reverse"}`}
        onClick={() => toggleOpen(false)}
      />
      <Youtube videoId={trailerUrl} opts={opts} />
      <div className="slider__genre-container">
        {movieData.genres?.map((genre) => (
          <span className="slider__genre">{genre.name}</span>
        ))}
      </div>
      <h1 className="slider__title">
        {movieData?.original_title || movieData?.name || ""}
      </h1>
      <p className="slider__description">{movieData.overview}</p>
      <div className="slider__details-box">
        {details.map((detail) => (
          <div>
            <label>{detail.label + " : "}</label>
            <label>{detail.value}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailSlider;
