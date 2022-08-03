import styled from "styled-components";

export const SuccessComponent = styled.div`
  margin-top: 5rem;
`;

export const SuccessContainer = styled.main`
  h1 {
    font-family: "Baloo 2", sans-serif;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["yellow-dark"]};
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
    color: ${(props) => props.theme["base-subtitle"]};
    margin-top: 0.25rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2.5rem;

  img {
    height: 18.3125rem;
  }
`;

export const DeliveryInfo = styled.div`
  padding: 2.5rem;
  border-radius: 6px 36px;
  width: 100%;
  max-width: 526px;

  border: 1px solid transparent;
  background: linear-gradient(
        ${(props) => props.theme["background"]},
        ${(props) => props.theme["background"]}
      )
      padding-box,
    linear-gradient(
        to right,
        ${(props) => props.theme["yellow"]},
        ${(props) => props.theme["purple"]}
      )
      border-box;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const BaseInfo = styled.div`
  display: flex;
  gap: 0.75rem;

  line-height: 130%;
  color: ${(props) => props.theme["base-text"]};

  div {
    width: 2rem;
    height: 2rem;
    background: ${(props) => props.theme["purple"]};
    color: ${(props) => props.theme["white"]};
    border-radius: 999px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Address = styled(BaseInfo)`
  div {
    background: ${(props) => props.theme["purple"]};
  }
`;

export const Time = styled(BaseInfo)`
  div {
    background: ${(props) => props.theme["yellow"]};
  }
`;
export const Payment = styled(BaseInfo)`
  div {
    background: ${(props) => props.theme["yellow-dark"]};
  }
`;

/* linear-gradient(
      ${(props) => props.theme["yellow"]},
      ${(props) => props.theme["purple"]}
    ); */
