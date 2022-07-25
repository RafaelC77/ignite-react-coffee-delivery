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

export const CoffeeListComponent = styled.main`
  h2 {
    margin-top: 2rem;
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }

  ul {
    list-style: none;
    margin-top: 3.375rem;

    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 2.5rem;

    li {
      width: 16rem;
      height: 19.375rem;
      border-radius: 6px 36px;
      background: ${(props) => props.theme["base-card"]};

      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        height: 7.5rem;
        margin-top: -1.25rem;
        margin-bottom: 0.75rem;
      }

      h3 {
        margin-top: 1rem;
        font-family: "Baloo 2", sans-serif;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 130%;
        color: ${(props) => props.theme["base-subtitle"]};
      }

      p {
        margin-top: 0.5rem;

        font-size: 0.875rem;
        line-height: 130%;
        color: ${(props) => props.theme["base-label"]};
        text-align: center;
        padding: 0 1.25rem;
      }
    }
  }
`;

export const Tag = styled.span`
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  padding: 0.3125rem 0.5rem;
  border-radius: 999px;

  font-size: 0.625rem;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;
`;

export const AddToCartComponent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  padding: 0 1.5rem;

  input {
    width: 4.5rem;
    height: 2.375rem;
    background: ${(props) => props.theme["base-button"]};
    border-radius: 6px;
    border: 0;
    text-indent: 55%;
    padding: 0 0.5rem;
    color: ${(props) => props.theme["base-title"]};
  }

  div {
    position: relative;
    display: flex;
    align-items: center;
    margin-left: auto;
  }
`;

export const PriceTag = styled.span`
  font-size: 0.875rem;
  line-height: 1.1375rem;
  color: ${(props) => props.theme["base-text"]};

  strong {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.95rem;
  }
`;

export const DecrementButton = styled.button`
  background: transparent;
  border: 0;

  color: ${(props) => props.theme["purple"]};

  position: absolute;
  left: 0.5rem;
`;

export const IncrementButton = styled.button`
  background: transparent;
  border: 0;
  color: ${(props) => props.theme["purple"]};

  position: absolute;
  right: 0.5rem;
`;

export const AddToCartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border: 0;
  border-radius: 6px;
  margin-left: 0.5rem;

  background: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme["background"]};

  display: flex;
  align-items: center;
  justify-content: center;
`;
