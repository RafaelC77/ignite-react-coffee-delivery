import styled from "styled-components";

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
  color: ${(props) => props.theme["base-text"]};
  font-size: 0.875rem;
  height: 2.625rem;
  padding: 0.75rem;
  border: 1px solid ${(props) => props.theme["base-button"]};
  border-radius: 4px;

  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }

  &:focus {
    outline: 1px solid ${(props) => props.theme["yellow-dark"]};
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

    &:hover {
      background: ${(props) => props.theme["base-hover"]};
    }

    &:active {
      background: ${(props) => props.theme["purple-light"]};
      outline: 1px solid ${(props) => props.theme["purple"]};
    }

    span {
      font-size: 0.75rem;
      line-height: 160%;
      text-transform: uppercase;
      color: ${(props) => props.theme["base-text"]};

      &:hover {
        color: ${(props) => props.theme["base-subtitle"]};
      }
    }
  }
`;
