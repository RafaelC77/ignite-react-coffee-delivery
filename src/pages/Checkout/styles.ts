import styled from "styled-components";

export const CheckoutComponent = styled.main`
  margin-top: 2.5rem;

  form {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
  }

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;
