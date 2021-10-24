import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ open: boolean }>(
  ({ theme, open }) => css`
    background-color: ${theme.color.white};
    box-shadow: rgb(0 0 0 / 10%) 0px 2px 8px 0px;
    min-width: 160px;
    overflow: hidden;
    padding: 15px;
    position: absolute;
    display: ${open ? "block" : "none"};
    right: 0;
    transition: height 0.2s linear;
    z-index: 2;

    ${theme.breakpoints.down("md")} {
      min-width: 250px;
    }
  `
);

export const TitleContainer = styled.div(
  ({ theme }) => css`
    border-bottom: 1px solid ${theme.color.darkGray};
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 10px;

    ${theme.breakpoints.down("md")} {
      margin-bottom: 30px;
    }
  `
);

export const ListItem = styled.li(
  ({ theme }) => css`
    border-bottom: 1px solid ${theme.color.darkGray};
    font-size: 14px;
    margin-bottom: 10px;

    ${theme.breakpoints.down("md")} {
      margin-bottom: 30px;
      font-size: 20px;
    }
  `
);

export const StyledLink = styled.a(
  ({ theme }) => css`
    text-decoration: none;
  `
);

export const EmptyPlaylist = styled.div`
  padding: 30px 0;
`;
