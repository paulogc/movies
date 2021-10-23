import type { Movie } from "../types";

export const normalizeMovies = (movies: any): Movie[] => {
  return movies.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    poster: movie.Poster,
    year: movie.Year,
  }));
};
