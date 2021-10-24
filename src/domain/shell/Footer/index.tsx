import React from "react";
import { useRouter } from "next/router";
import { StyledFooter } from "./styles";
import theme from "../../../../app/theme/default";

const Header = () => {
  const { pathname } = useRouter();
  const isConfirmationScreen = pathname.includes("confirm");

  return (
    <StyledFooter>
      {isConfirmationScreen
        ? `My favorite color is ${theme.background.favorite}`
        : null}
    </StyledFooter>
  );
};

export default Header;
