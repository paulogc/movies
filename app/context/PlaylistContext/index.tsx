import React, { createContext, useContext, useState } from "react";
import type { Movie } from "../../../src/domain/movies/types";
import type { PlaylistMovie } from "../../../src/domain/playlist/types";

interface PlaylistContext {
  playlist: Record<string, PlaylistMovie>;
  updatePlaylist: (movie: Movie) => void;
  confirmMovie: (id: string) => void;
}

export const PlaylistContext = createContext({
  playlist: {},
  updatePlaylist: (movie: Movie) => {},
} as PlaylistContext);

export const PlaylistContextProvider: React.FC = ({ children }) => {
  const [playlist, setPlaylist] = useState<Record<string, PlaylistMovie>>({});

  const updatePlaylist = (movie: Movie) => {
    setPlaylist({ ...playlist, [movie.id]: { ...movie, confirmed: false } });
  };

  const confirmMovie = (id: string) => {
    const { [id]: movie, ...rest } = playlist;
    setPlaylist({ ...rest, [id]: { ...movie, confirmed: true } });
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
