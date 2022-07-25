import styled from "styled-components";

export const BannerComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5.75rem 0;

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

      div {
        width: 2rem;
        height: 2rem;
        border-radius: 999px;

        color: ${(props) => props.theme["background"]};

        display: flex;
        justify-content: center;
        align-items: center;
      }

      span {
        font-size: 1rem;
        line-height: 130%;
        color: ${(props) => props.theme["base-text"]};
      }
    }

    li:nth-child(1) div {
      background: ${(props) => props.theme["yellow-dark"]};
    }

    li:nth-child(2) div {
      background: ${(props) => props.theme["base-text"]};
    }

    li:nth-child(3) div {
      background: ${(props) => props.theme["yellow"]};
    }

    li:nth-child(4) div {
      background: ${(props) => props.theme["purple"]};
    }
  }

  img {
    height: 22.5rem;
  }
`;
