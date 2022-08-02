import styled from "styled-components";

export const CoffeeComponent = styled.li`
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

  & + span {
    margin-left: 0.25rem;
  }
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
    padding: 0 0.5rem;
    color: ${(props) => props.theme["base-title"]};
    text-align: center;
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

  &:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }
`;

export const IncrementButton = styled.button`
  background: transparent;
  border: 0;
  color: ${(props) => props.theme["purple"]};

  position: absolute;
  right: 0.5rem;

  &:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }
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

  transition: 0.1s;

  &:hover {
    background: ${(props) => props.theme["purple"]};
  }
`;
