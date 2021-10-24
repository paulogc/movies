import type { ConfirmMovie } from "../types";

export const normalizeConfirmMovie = (movie: any): ConfirmMovie => ({
  id: movie.imdbID,
  title: movie.Title,
  poster: movie.Poster,
  year: movie.Year,
  actors: movie.Actors,
  country: movie.Country,
  director: movie.Director,
  plot: movie.Plot,
});
