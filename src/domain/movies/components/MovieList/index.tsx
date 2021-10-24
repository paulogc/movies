import React from "react";
import { MovieItem } from "../MovieItem";
import type { Movie } from "../../types";
import { List, NoResultParagraph, NoResultWrapper } from "./style";

interface MovieListProps {
  movies: Movie[];
  search: string;
}

export const MovieList = ({ movies, search }: MovieListProps) => {
  if (search && !movies.length) {
    return (
      <NoResultWrapper>
        <NoResultParagraph>{`Couldn't find results for "${search}"`}</NoResultParagraph>
      </NoResultWrapper>
    );
  }

  return (
    <List>
      {movies.map((movie) => (
        <MovieItem key={movie.id} movie={movie} />
      ))}
    </List>
  );
};
