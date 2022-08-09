import styled from "styled-components";

interface ChangeAmountButtonComponentProps {
  thin?: boolean;
}

export const ChangeAmountButtonComponent = styled.div<ChangeAmountButtonComponentProps>`
  position: relative;
  display: flex;
  align-items: center;

  input {
    width: 4.5rem;
    height: ${(props) => (props.thin ? "2rem" : "2.375rem")};
    background: ${(props) => props.theme["base-button"]};
    border-radius: 6px;
    border: 0;
    padding: 0 0.5rem;
    color: ${(props) => props.theme["base-title"]};
    text-align: center;
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
