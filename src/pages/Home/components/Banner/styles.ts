import styled from "styled-components";

interface IntroIconProps {
  color: "yellow-dark" | "base-text" | "yellow" | "purple";
}

export const BannerComponent = styled.div`
  width: 100%;
  padding: 5.75rem 0;
  background: url("src/assets/banner-background.png");
  background-size: contain;
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-title"]};
    max-width: 580px;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-top: 1rem;
    max-width: 580px;
  }

  ul {
    list-style: none;
    margin-top: 4.124rem;
    max-width: 567px;

    display: grid;
    grid-template-columns: max-content max-content;

    row-gap: 1.25rem;
    column-gap: 2.5rem;

    li {
      display: flex;
      align-items: center;
      justify-content: start;
      gap: 0.75rem;

      span {
        font-size: 1rem;
        line-height: 130%;
        color: ${(props) => props.theme["base-text"]};
      }
    }
  }

  img {
    height: 22.5rem;
  }
`;

export const IntroIcon = styled.div<IntroIconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 999px;

  color: ${(props) => props.theme["background"]};
  background-color: ${(props) => props.theme[props.color]};

  display: flex;
  justify-content: center;
  align-items: center;
`;
