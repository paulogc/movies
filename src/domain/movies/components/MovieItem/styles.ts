import styled, { css } from "styled-components";

export const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 380px;
  width: 250px;
  opacity: 1;
  transition: opacity 0.2s linear;

  :hover {
    opacity: 0.8;
  }
`;

export const TextContainer = styled.div`
  margin: 10px 5px;
`;

export const Title = styled.h4`
  font-size: 18px;
  margin-bottom: 5px;
  max-width: 250px;
`;

export const AddButton = styled.div(
  ({ theme }) => css`
    cursor: pointer;
    position: relative;
    overflow: hidden;

    ::after {
      content: "Add to playlist";
      height: 10px;
      font-size: 28px;
      color: ${theme.color.fontWhite};
      position: absolute;
      bottom: -10px;
      left: 5px;
      transition: bottom 0.2s linear;
    }

    ::before {
      content: "+";
      height: 10px;
      font-size: 55px;
      color: ${theme.color.fontWhite};
      position: absolute;
      top: -50px;
      right: 10px;
      transition: top 0.2s linear;
      z-index: 2;
    }

    :hover {
      ::after {
        bottom: 24px;
      }

      ::before {
        top: 0px;
      }
    }
  `
);
