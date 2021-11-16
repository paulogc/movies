import React from "react";
import NextImage from "next/image";
import {
  AddButton,
  Wrapper,
  ImageContainer,
  Title,
  TextContainer,
} from "./styles";
import { usePlaylistContext } from "../../../../../app/context/PlaylistContext";
import type { Movie } from "../../types";

interface MovieItemProps {
  movie: Movie;
}

export const MovieItem = ({ movie }: MovieItemProps) => {
  const { playlist, updatePlaylist } = usePlaylistContext();

  const onPlaylist = !!playlist[movie.id];

  const handleAddToPlaylist = () => {
    if (!onPlaylist) {
      updatePlaylist(movie);
    }
  };

  const posterUrl =
    movie.poster === "N/A" ? "/images/placeholder" : movie.poster;

  return (
    <Wrapper>
      <AddButton
        role="button"
        onClick={handleAddToPlaylist}
        onPlaylist={onPlaylist}
      >
        <ImageContainer>
          <NextImage
            alt={`Poster ${movie.title}`}
            layout="fill"
            src={movie.poster}
          />
        </ImageContainer>
      </AddButton>
      <TextContainer>
        <Title>{movie.title}</Title>
        <span>{movie.year}</span>
      </TextContainer>
    </Wrapper>
  );
};
