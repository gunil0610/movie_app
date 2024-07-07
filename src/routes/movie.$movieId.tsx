import "./Detail.css";

import { createFileRoute } from "@tanstack/react-router";
import axios from "axios";
import { MovieDetail } from "../types/movie";

export const Route = createFileRoute("/movie/$movieId")({
  component: Detail,
  loader: async ({ params: { movieId } }) => {
    const movie = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`
    );
    return {
      movie: movie.data.data.movie as MovieDetail,
    };
  },
});

function Detail() {
  const { movie } = Route.useLoaderData();

  if (movie) {
    return (
      <div className="movie__container">
        <div className="movie">
          <img src={movie.large_cover_image} alt={movie.title} />
          <div className="movie__data">
            <h3 className="movie__title">{movie.title}</h3>
            <h5 className="movie__year">{movie.year}</h5>
            <ul className="movie__genres">
              {movie.genres.map((genre, index) => (
                <li key={index} className="genres__genre">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="movie__summary">{movie.description_full}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
