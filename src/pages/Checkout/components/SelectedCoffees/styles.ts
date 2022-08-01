import styled from "styled-components";

export const SelectedCoffeesInfo = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const SelectedCoffeesCard = styled.div`
  width: 100%;
  padding: 2.5rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme["base-card"]};

  ul {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    list-style: none;
  }

  li {
    display: flex;
    justify-content: space-between;
    gap: 1.25rem;
    position: relative;

    &::after {
      content: "";
      width: 100%;
      border: 1px solid ${(props) => props.theme["base-button"]};
      position: absolute;
      bottom: -1.5rem;
    }
  }

  img {
    height: 4rem;
  }
`;

export const CoffeeInfo = styled.div`
  margin-right: auto;

  span {
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
  }
`;

export const Price = styled.span`
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme["base-text"]};
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

export const RemoveButton = styled.button`
  background: ${(props) => props.theme["base-button"]};
  border: 0;
  border-radius: 6px;
  height: 2rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme["purple"]};

  display: flex;
  align-items: center;
  gap: 0.25rem;

  transition: 0.1s;

  span {
    font-size: 0.75rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};

    &:hover {
      color: ${(props) => props.theme["base-subtitle"]};
    }
  }

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;

  div {
    position: relative;
    display: flex;
    align-items: center;
    width: 4.5rem;
  }

  input {
    width: 4.5rem;
    height: 2rem;
    background: ${(props) => props.theme["base-button"]};
    border-radius: 6px;
    border: 0;
    text-indent: 45%;
    padding: 0 0.5rem;
    color: ${(props) => props.theme["base-title"]};
  }
`;

export const CheckoutSummary = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  font-size: 0.875rem;
  line-height: 130%;
  color: ${(props) => props.theme["base-text"]};

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const TotalItensPrice = styled.span`
  font-size: 1rem;
  line-height: 130%;
`;

export const TotalPrice = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  line-height: 130%;
  color: ${(props) => props.theme["base-subtitle"]};
`;

export const ConfirmOrderButton = styled.button`
  width: 100%;
  height: 2.875rem;
  border-radius: 6px;
  border: 0;
  background: ${(props) => props.theme["yellow"]};
  color: ${(props) => props.theme["white"]};
  margin-top: 1.5rem;

  font-weight: 700;
  font-size: 0.875rem;
  line-height: 160%;
  text-transform: uppercase;
  transition: 0.1s;

  &:hover {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;
