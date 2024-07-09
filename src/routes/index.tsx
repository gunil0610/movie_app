import Movie from "../components/Movie";

import { createFileRoute, Link } from "@tanstack/react-router";
import clsx from "clsx";
import { z } from "zod";
import { useMovieLists } from "../hooks/useMovieLists";

const movieListSchema = z.object({
  page: z.number().catch(0),
  limit: z.number().catch(20),
});

export const Route = createFileRoute("/")({
  component: Index,
  validateSearch: movieListSchema,
});

function Index() {
  const { page, limit } = Route.useSearch();

  const { isPending, isError, error, data, isFetching, isPlaceholderData } =
    useMovieLists({ limit, page });

  return (
    <>
      <section className="flex h-full w-full justify-center">
        {isPending ? (
          <div className="flex min-h-screen w-full items-center justify-center font-light">
            <span className="loader__text">Loading...</span>
          </div>
        ) : isError ? (
          <div>Error: {error.message}</div>
        ) : (
          <div className="grid w-[80%] grid-cols-1 items-center gap-0 p-12 pt-16 md:w-[90%] xl:grid-cols-2 xl:gap-2.5">
            {data.map((movie) => (
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
      <div className="mb-20 flex flex-col gap-4">
        <span className="flex w-full items-center justify-center">
          Current Page: {page + 1}
        </span>
        <div className="flex w-full justify-center gap-2">
          <Link
            to="/"
            className={clsx(
              "grid h-12 items-center rounded border-black px-3 shadow-lg",
              page === 0 || isFetching
                ? "cursor-not-allowed bg-gray-300"
                : "cursor-pointer bg-white"
            )}
            search={{
              page: Math.max(page - 1, 0),
              limit: limit,
            }}
            disabled={page === 0 || isFetching}
          >
            Previous Page
          </Link>
          <Link
            to="/"
            className={clsx(
              "grid h-12 items-center rounded border-black px-3 shadow-lg disabled:cursor-not-allowed disabled:bg-gray-300",
              isPlaceholderData || isFetching
                ? "cursor-not-allowed bg-gray-300"
                : "cursor-pointer bg-white"
            )}
            search={{
              page: page + 1,
              limit: limit,
            }}
            disabled={isPlaceholderData || isFetching}
          >
            Next Page
          </Link>
        </div>
        {isFetching ? (
          <span className="flex w-full items-center justify-center">
            Loading...
          </span>
        ) : null}
      </div>
    </>
  );
}
