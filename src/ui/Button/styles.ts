import styled, { css } from "styled-components";

export const Button = styled.button(
  ({ theme }) => css`
    border-radius: 5px;
    border: 1px solid ${theme.color.darkGray};
    background-color: ${theme.background.blue};
    color: ${theme.color.fontWhite};
    cursor: pointer;
    font-size: 16px;
    padding: 8px 20px;
  `
);
