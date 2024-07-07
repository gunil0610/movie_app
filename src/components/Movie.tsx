import { Link } from "@tanstack/react-router";
import "./Movie.css";

export type MovieProps = {
  id: number;
  year: number;
  title: string;
  summary: string;
  poster: string;
  genres: string[];
};

function Movie({ id, year, title, summary, poster, genres }: MovieProps) {
  return (
    <div className="movie">
      <Link to={`/movie/${id}`}>
        <img src={poster} alt={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

export default Movie;
