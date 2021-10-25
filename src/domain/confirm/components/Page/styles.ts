import styled, { css } from "styled-components";

export const Title = styled.h1`
  font-size: 26px;
  margin-bottom: 10px;
`;

export const Information = styled.h2`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 360px;
  height: 460px;
  margin-bottom: 28px;
`;

export const ConfirmContainer = styled.div`
  margin: 30px 0;
  width: 100%;
`;

export const ConfirmedLabel = styled.span(
  ({ theme }) => css`
    font-size: 22px;
    color: ${theme.color.green};
  `
);
