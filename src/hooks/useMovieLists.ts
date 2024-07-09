import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MovieList } from "../types/movie";

type MovieListResponse = {
  status: "ok" | "error";
  status_message: string;
  data: {
    movie_count: number;
    limit: number;
    page_number: number;
    movies: MovieList[];
  };
  "@meta": {
    server_time: number;
    server_timezone: string;
    api_version: number;
    execution_time: string;
  };
};

const getMovies = async ({ limit, page }: { limit: number; page: number }) => {
  const { data } = await axios.get<MovieListResponse>(
    `https://yts.mx/api/v2/list_movies.json?sort_by=rating&limit=${limit}&page=${page}`
  );
  return data.data.movies;
};

export const useMovieLists = ({
  limit = 20,
  page = 1,
}: {
  limit?: number;
  page?: number;
}) => {
  return useQuery({
    queryKey: [
      "getMovies",
      {
        limit,
        page,
      },
    ],
    queryFn: () => getMovies({ limit, page }),
    placeholderData: keepPreviousData,
  });
};
