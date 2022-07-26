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

export const AddressAndPaymentInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 640px;
  width: 100%;
`;

export const AddressForm = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.5rem;
    color: ${(props) => props.theme["yellow-dark"]};
    margin-bottom: 2rem;

    h3 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    p {
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme["base-text"]};
      margin-top: 0.25rem;
    }
  }
`;

export const InputFields = styled.div`
  display: grid;
  grid-template-columns: 12.5rem auto 3.75rem;
  row-gap: 1rem;
  column-gap: 0.75rem;

  div {
    position: relative;
    display: flex;
    align-items: center;
    grid-column: span 2;

    span {
      font-style: italic;
      font-size: 0.75rem;
      line-height: 130%;
      color: ${(props) => props.theme["base-label"]};

      position: absolute;
      right: 0.75rem;
    }
  }
`;

export const BaseInput = styled.input`
  background: ${(props) => props.theme["base-input"]};
  color: ${(props) => props.theme["base-label"]};
  font-size: 0.875rem;
  height: 2.625rem;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;

export const PostalCodeInput = styled(BaseInput)`
  grid-column: 1;
`;

export const StreetInput = styled(BaseInput)`
  grid-column: span 3;
`;

export const NumberInput = styled(BaseInput)`
  grid-column: span 1;
`;

export const CityInfo = styled(BaseInput)`
  grid-column: span 1;
`;

export const StateInfo = styled(BaseInput)`
  grid-column: span 1;
`;

export const AditionalInfo = styled(BaseInput)`
  width: 100%;
  position: relative;
`;

export const PaymentMethod = styled.div`
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.5rem;
    color: ${(props) => props.theme["purple"]};
    margin-bottom: 2rem;

    h3 {
      font-size: 1rem;
      font-weight: 400;
      line-height: 130%;
      color: ${(props) => props.theme["base-subtitle"]};
    }

    p {
      font-size: 0.875rem;
      line-height: 130%;
      color: ${(props) => props.theme["base-text"]};
      margin-top: 0.25rem;
    }
  }
`;

export const PaymentOptions = styled.div`
  display: flex;
  gap: 0.75rem;

  button {
    width: 100%;
    padding: 1rem;
    background: ${(props) => props.theme["base-button"]};
    border: 0;
    border-radius: 6px;
    color: ${(props) => props.theme["purple"]};

    display: flex;
    gap: 0.75rem;
    justify-content: flex-start;
    align-items: center;

    span {
      font-size: 0.75rem;
      line-height: 160%;
      text-transform: uppercase;
      color: ${(props) => props.theme["base-text"]};
    }
  }
`;

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
`;

export const IncrementButton = styled.button`
  background: transparent;
  border: 0;
  color: ${(props) => props.theme["purple"]};

  position: absolute;
  right: 0.5rem;
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

  span {
    font-size: 0.75rem;
    line-height: 160%;
    color: ${(props) => props.theme["base-text"]};
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
`;