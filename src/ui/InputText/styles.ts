import styled, { css } from "styled-components";

export const Input = styled.input(
  ({ theme }) => css`
    height: 30px;
    border-radius: 5px;
    border: 1px solid ${theme.color.darkGray};
    width: 100%;
    padding-left: 10px;

    ::placeholder {
      color: ${theme.color.lightGray};
    }
  `
);
