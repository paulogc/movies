import styled, { css } from "styled-components";

export const StyledHeader = styled.header(
  ({ theme }) => css`
    align-items: center;
    background-color: ${theme.background.blue};
    display: flex;
    justify-content: space-between;
    height: 40px;
    padding: 15px;
  `
);

export const Text = styled.h5(
  ({ theme }) => css`
    color: ${theme.color.fontWhite};
  `
);
