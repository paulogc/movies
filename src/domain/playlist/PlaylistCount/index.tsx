import React, { useState, useRef, useEffect } from "react";
import { usePlaylistContext } from "../../../../app/context/PlaylistContext";
import type { Movie } from "../../movies/types";
import { PlaylistDropdown } from "../PlaylistDropdown";
import { Count, Wrapper, PlaylistButton } from "./styles";

export const PlaylistCount = () => {
  const ref = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { playlist } = usePlaylistContext();

  const handleClickDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const playlistItems = Object.values(playlist) as Movie[];
  const playlistCount = playlistItems.length;

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <Wrapper ref={ref}>
      <PlaylistButton onClick={handleClickDropdown} role="button">
        <h5>Playlist ►</h5>
        {!!playlistCount && <Count>{playlistCount}</Count>}
      </PlaylistButton>
      <PlaylistDropdown movies={playlistItems} open={dropdownOpen} />
    </Wrapper>
  );
};
