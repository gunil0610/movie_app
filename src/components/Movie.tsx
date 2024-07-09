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
    <div className="mb-16 w-[90%] rounded bg-white p-5 font-light text-[#adaeb9] shadow">
      <Link
        to={`/movie/${id}`}
        className="flex flex-col items-start justify-between text-inherit decoration-0 md:w-[90%] md:flex-row"
      >
        <img
          src={poster}
          alt={title}
          className="relative top-[-50px] mr-0 w-full max-w-[1500px] shadow md:mr-8 md:w-auto"
        />
        <div className="flex w-full flex-col flex-wrap md:w-1/2">
          <h3 className="m-0 mb-1.5 text-2xl font-light text-[#2c2c2c]">
            {title}
          </h3>
          <h5 className="m-0 font-light">{year}</h5>
          <ul className="m-0 my-1.5 w-full list-none overflow-auto p-0">
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
