import { Link } from "@tanstack/react-router";

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
    <div className="w-[90%] bg-white mb-16 font-light p-5 rounded text-[#adaeb9] shadow">
      <Link
        to={`/movie/${id}`}
        className="flex items-start justify-between text-inherit decoration-0"
      >
        <img
          src={poster}
          alt={title}
          className="relative top-[-50px] max-w-[1500px] mr-8 shadow"
        />
        <div className="flex flex-col flex-wrap w-1/2">
          <h3 className="m-0 font-light mb-1.5 text-2xl text-[#2c2c2c]">
            {title}
          </h3>
          <h5 className="m-0 font-light">{year}</h5>
          <ul className="list-none p-0 m-0 my-1.5 overflow-auto w-full">
            {genres.map((genre, index) => (
              <li key={index} className="mr-2.5 text-sm">
                {genre}
              </li>
            ))}
          </ul>
          <p className="break-words">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

export default Movie;
