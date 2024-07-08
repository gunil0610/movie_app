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
      <div className="flex items-center justify-center w-full h-screen overflow-hidden">
        {/* movie */}
        <div className="w-3/4 flex bg-white mb-16 font-light p-5 rounded text-[#adaeb9] shadow">
          <img
            src={movie.large_cover_image}
            alt={movie.title}
            className="relative max-w-[1500px] mr-8 shadow md:w-[90%]"
          />
          <div className="flex flex-col flexwrap w-1/2">
            <h3 className="m-0 font-light mb-1.5 text-2xl text-[#2c2c2c]">
              {movie.title}
            </h3>
            <h5 className="m-0 font-light">{movie.year}</h5>
            <ul className="list-none p-0 m-0 my-1.5 flex flex-wrap">
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
