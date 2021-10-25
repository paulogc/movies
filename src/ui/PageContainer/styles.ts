import styled, { css } from "styled-components";

export const PageMain = styled.main(
  ({ theme }) => css`
    width: 100%;
    display: block;
    flex: 1 0 auto;
    background-color: ${theme.background.skyBlue};
  `
);

export const PageArticle = styled.article`
  max-width: 960px;
  margin: 20px auto;
  padding: 10px;
`;
