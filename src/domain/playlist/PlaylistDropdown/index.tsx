import React from "react";
import {
  Wrapper,
  TitleContainer,
  EmptyPlaylist,
  ListItem,
  StyledLink,
} from "./styles";
import Link from "next/link";
import type { Movie } from "../../movies/types";

interface PlaylistDropdownProps {
  open: boolean;
  movies: Movie[];
}

export const PlaylistDropdown = ({ open, movies }: PlaylistDropdownProps) => {
  const list = movies.length ? (
    <ul>
      {movies.map((movie) => (
        <ListItem key={movie.id}>
          <Link href={`/confirm/${movie.id}`} passHref>
            <StyledLink>{movie.title}</StyledLink>
          </Link>
        </ListItem>
      ))}
    </ul>
  ) : (
    <EmptyPlaylist>
      <span>Add movies to the Playlist</span>
    </EmptyPlaylist>
  );
  return (
    <Wrapper open={open}>
      <TitleContainer>
        <span>Your playlist</span>
      </TitleContainer>
      {list}
    </Wrapper>
  );
};
