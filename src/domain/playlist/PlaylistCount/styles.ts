import styled, { css } from "styled-components";

export const PlaylistButton = styled.div(
  ({ theme }) => css`
    color: ${theme.color.fontWhite};
    cursor: pointer;
    position: relative;
  `
);

export const Wrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Count = styled.div(
  ({ theme }) => css`
    background-color: red;
    border: 1px solid ${theme.color.fontWhite};
    border-radius: 50%;
    width: 15px;
    height: 15px;
    position: absolute;
    left: -8px;
    top: -14px;
    text-align: center;
  `
);
