import React from "react";
import { MovieItem } from "../MovieItem";
import type { Movie } from "../../types";
import { List } from "./style";

interface MovieListProps {
  movies: Movie[];
}

export const MovieList = ({ movies }: MovieListProps) => {
  return (
    <List>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </List>
  );
};
