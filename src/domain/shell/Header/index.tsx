import React from "react";
import Link from "next/link";
import { PlaylistCount } from "../../playlist/components/PlaylistCount";
import { StyledHeader, Text } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <Link href="/">
        <Text>Movies</Text>
      </Link>
      <PlaylistCount />
    </StyledHeader>
  );
};

export default Header;
