import styled from "styled-components";

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
    margin-bottom: 10rem;

    display: flex;
    flex-wrap: wrap;
    column-gap: 2rem;
    row-gap: 2.5rem;
  }
`;
