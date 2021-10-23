import React, { createContext, useContext, useState } from "react";
import type { Movie } from "../../domain/movies/types";

export const PlaylistContext = createContext({
  playlist: {},
  updatePlaylist: (movie: Movie) => {},
});

export const PlaylistContextProvider: React.FC = ({ children }) => {
  const [playlist, setPlaylist] = useState({});

  const updatePlaylist = (movie: Movie) => {
    setPlaylist({ ...playlist, [movie.id]: movie });
  };

  const value = {
    playlist,
    updatePlaylist,
  };

  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
};

export const usePlaylistContext = () => useContext(PlaylistContext);
