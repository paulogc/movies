import React from "react";
import { useRouter } from "next/router";
import { StyledFooter } from "./styles";
import theme from "../../../../app/theme/default";

const Header = () => {
  const { pathname } = useRouter();
  const isConfirmationScreen = pathname.includes("confirm");

  return (
    <StyledFooter>
      {isConfirmationScreen ? (
        <span>
          My favorite color is{" "}
          <span style={{ color: theme.background.skyBlue }}>Sky Blue</span>
        </span>
      ) : null}
    </StyledFooter>
  );
};

export default Header;
