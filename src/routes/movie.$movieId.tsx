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
      <div className="flex min-h-screen w-full items-center justify-center overflow-auto pt-5">
        {/* movie */}
        <div className="mb-16 flex w-3/4 flex-col items-center gap-2 rounded bg-white p-5 font-light text-[#adaeb9] shadow-lg md:flex-row md:items-start md:justify-between md:gap-0">
          <img
            src={movie.large_cover_image}
            alt={movie.title}
            className="relative m-0 mx-auto aspect-auto w-[90%] max-w-[1500px] shadow md:mr-8 md:w-[45%]"
          />
          <div className="flexwrap flex w-[90%] flex-col md:w-1/2">
            <h3 className="m-0 mb-1.5 text-2xl font-medium text-[#2c2c2c]">
              {movie.title}
            </h3>
            <h5 className="m-0 font-light">{movie.year}</h5>
            <ul className="m-0 my-1.5 flex list-none flex-wrap p-0">
              {movie.genres.map((genre, index) => (
                <li key={index} className="mr-2.5 text-sm">
                  {genre}
                </li>
              ))}
            </ul>
            <p className="break-words">{movie.description_full}</p>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
