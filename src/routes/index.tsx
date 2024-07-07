import React, { useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

import { createFileRoute } from "@tanstack/react-router";
import { MovieList } from "../types/movie";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [movies, setMovies] = React.useState<MovieList[]>([]);

  useEffect(() => {
    const getMovies = async () => {
      const {
        data: {
          data: { movies },
        },
      } = await axios.get(
        "https://yts.mx/api/v2/list_movies.json?sort_by=rating"
      );
      setMovies(movies as MovieList[]);
      setIsLoading(false);
    };
    getMovies();
  }, []);

  return (
    <section className="container">
      {isLoading ? (
        <div className="loader">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="movies">
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              year={movie.year}
              title={movie.title}
              summary={movie.summary}
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </section>
  );
}