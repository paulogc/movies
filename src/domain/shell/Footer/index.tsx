import React from "react";
import { useRouter } from "next/router";
import { StyledFooter } from "./styles";
import { useThemeContext } from "../../../../app/context/ThemeContext";
import theme from "../../../../app/theme/default";

const Header = () => {
  const { pathname } = useRouter();
  const { changeTheme, theme: contextTheme } = useThemeContext();
  const isConfirmationScreen = pathname.includes("confirm");
  console.log("theme", contextTheme);
  return (
    <StyledFooter>
      {isConfirmationScreen ? (
        <span>
          My favorite color is{" "}
          <span style={{ color: theme.background.skyBlue }}>Sky Blue</span>
        </span>
      ) : null}
      <input type="checkbox" onChange={changeTheme} />
    </StyledFooter>
  );
};

export default Header;
