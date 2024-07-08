import React, { useEffect } from "react";
import axios from "axios";
import Movie from "../components/Movie";

import { createLazyFileRoute } from "@tanstack/react-router";
import { MovieList } from "../types/movie";

export const Route = createLazyFileRoute("/")({
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
    <section className="h-full flex justify-center">
      {isLoading ? (
        <div className="w-full h-screen flex items-center justify-center font-light">
          <span className="loader__text">Loading...</span>
        </div>
      ) : (
        <div className="grid gap-2.5 p-12 pt-16 w-[80%] grid-cols-1 2xl:grid-cols-2">
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
