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
  }
`;

export const BaseInput = styled.input`
  width: 100%;
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

export const PostalCode = styled.div`
  grid-column: 1;
`;

export const Street = styled.div`
  grid-column: span 3;
`;

export const Number = styled.div`
  grid-column: span 1;
`;

export const CityInfo = styled.div`
  grid-column: span 1;
`;

export const StateInfo = styled.div`
  grid-column: span 1;
`;

export const AditionalInfo = styled.div`
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
`;

export const Neighborhood = styled.div`
  grid-column: span 1;
`;

export const ErrorMessage = styled.p`
  font-size: 0.75rem;
  color: ${(props) => props.theme["danger"]};
  margin-top: 0.25rem;
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
`;

export const PaymentContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    background: ${(props) => props.theme["purple-light"]};
    outline: 1px solid ${(props) => props.theme["purple"]};
  }
`;

export const PaymentContent = styled.div`
  color: ${(props) => props.theme["purple"]};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;

  width: 100%;
  padding: 1rem;
  background: ${(props) => props.theme["base-button"]};
  border: 0;
  border-radius: 6px;

  &:hover {
    background: ${(props) => props.theme["base-hover"]};
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
`;

export const PaymentErrorMessage = styled(ErrorMessage)`
  grid-column: span 3;
`;
