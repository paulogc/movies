import React, { createContext, useContext, useState } from "react";
import { Movie } from "../../../src/domain/movies/types";

interface PlaylistContext {
  playlist: Record<string, Movie>;
  updatePlaylist: (movie: Movie) => void;
  confirmMovie: (id: string) => void;
}

export const PlaylistContext = createContext({
  playlist: {},
  updatePlaylist: (movie: Movie) => {},
} as PlaylistContext);

export const PlaylistContextProvider: React.FC = ({ children }) => {
  const [playlist, setPlaylist] = useState<Record<string, Movie>>({});

  const updatePlaylist = (movie: Movie) => {
    setPlaylist({ ...playlist, [movie.id]: movie });
  };

  const confirmMovie = (id: string) => {
    const { [id]: movie, ...rest } = playlist;
    setPlaylist(rest);
  };

  const value = {
    playlist,
    updatePlaylist,
    confirmMovie,
  };

  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylistContext = () => useContext(PlaylistContext);
