import styled, { css } from "styled-components";

export const StyledFooter = styled.footer(
  ({ theme }) => css`
    color: ${theme.color.fontWhite};
    background-color: ${theme.background.blue};
    height: 80px;
    padding: 15px;
  `
);
