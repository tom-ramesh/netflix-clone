import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import React, { useState, useEffect, useRef } from "react";
import axios from "../../axios";
import DetailSlider from "../DetailSlider/DetailSlider";
import "./row.css";

export const imageUrl = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLarge, setId, toggleSlider, slider }) => {
  const containerRef = useRef();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const horizontalScroll = (value) => {
    containerRef.current.scrollLeft += value;
  };

  return (
    <div className="row__container">
      <h2 className="row__title">{title}</h2>
      <div>
        <ChevronLeft
          className="row__scroll-btn"
          onClick={() => horizontalScroll(-250)}
        />
        <ChevronRight
          className="row__scroll-btn"
          onClick={() => horizontalScroll(250)}
        />
        <div className="row__poster-container" ref={containerRef}>
          {movies.map((movie, index) => (
            <img
              key={movie.id}
              onClick={() => {
                if (!slider) {
                  toggleSlider(true);
                }
                setId(movies[index]?.id);
              }}
              className={`row__poster ${isLarge && "row__poster-large"}`}
              src={`${imageUrl}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
