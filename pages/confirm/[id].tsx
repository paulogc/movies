import Image from "next/image";
import { normalizeConfirmMovie } from "../../src/domain/confirm/helpers/normalizeMovile";
import { PageContainer } from "../../src/ui/PageContainer";
import {
  Title,
  ImageContainer,
  Information,
  ConfirmContainer,
} from "../../src/domain/confirm/components/Page/styles";
import type { ConfirmMovie } from "../../src/domain/confirm/types";
import { usePlaylistContext } from "../../app/context/PlaylistContext";
import { Button } from "../../src/ui/Button";

export async function getServerSideProps({ query }) {
  const res = await fetch(
    `https://www.omdbapi.com/?i=${query.id}&plot=full&type=movie&apikey=c5730e0`
  );
  const movie = await res.json();

  return {
    props: {
      movie: normalizeConfirmMovie(movie),
    },
  };
}

interface ConfirmPageProps {
  movie: ConfirmMovie;
}

const Confirm = ({ movie }: ConfirmPageProps) => {
  const { playlist, confirmMovie } = usePlaylistContext();

  const canConfirm = !!playlist[movie.id];

  const handleConfirmMovie = () => {
    confirmMovie(movie.id);
  };

  return (
    <PageContainer>
      <ImageContainer>
        <Image alt={`Poster ${movie.title}`} layout="fill" src={movie.poster} />
      </ImageContainer>
      <Title>{movie.title}</Title>
      <Information>Year: {movie.year}</Information>
      <Information>Director: {movie.director}</Information>
      <Information>Actors: {movie.actors}</Information>
      <Information>Country: {movie.country}</Information>
      <p>{movie.plot}</p>
      <ConfirmContainer>
        {canConfirm && (
          <Button onClick={handleConfirmMovie} label="Confirm Movie" />
        )}
      </ConfirmContainer>
    </PageContainer>
  );
};

export default Confirm;
