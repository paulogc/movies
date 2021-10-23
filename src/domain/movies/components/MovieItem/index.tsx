import React from "react";
import NextImage from "next/image";
import {
  AddButton,
  Wrapper,
  ImageContainer,
  Title,
  TextContainer,
} from "./styles";
import { usePlaylistContext } from "../../../../context/PlaylistContext";

export const MovieItem = ({ movie }) => {
  const { playlist, updatePlaylist } = usePlaylistContext();

  const isMovieOnThePlaylist = !!playlist[movie.id];

  const handleAddToPlaylist = () => {
    if (!isMovieOnThePlaylist) {
      updatePlaylist(movie);
    }
  };

  return (
    <Wrapper>
      <AddButton onClick={handleAddToPlaylist} role="button">
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
