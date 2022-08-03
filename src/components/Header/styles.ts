import styled from "styled-components";

export const HeaderComponent = styled.header`
  padding: 2rem 0;

  position: sticky;
  top: 0;

  background: ${(props) => props.theme["background"]};
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface InfoBarProps {
  isCartEmpty: boolean;
}

export const InfoBar = styled.div<InfoBarProps>`
  display: flex;
  gap: 0.75rem;

  div {
    height: 2.375rem;
    padding: 0.5rem;
    border-radius: 6px;

    background: ${(props) => props.theme["purple-light"]};
    color: ${(props) => props.theme["purple-dark"]};

    display: flex;
    gap: 0.25rem;
    align-items: center;

    font-size: 0.875rem;
  }

  a {
    height: 2.375rem;
    padding: 0.5rem;
    border-radius: 6px;
    position: relative;

    background: ${(props) => props.theme["yellow-light"]};
    color: ${(props) => props.theme["yellow-dark"]};

    span {
      position: absolute;
      top: -0.5rem;
      right: -0.5rem;
      width: 1.25rem;
      height: 1.25rem;
      border-radius: 999px;

      background: ${(props) => props.theme["yellow-dark"]};
      color: white;

      text-align: center;
      display: flex;
      align-items: center;
      justify-content: center;

      font-size: 0.75rem;
      font-weight: 700;

      visibility: ${(props) => (props.isCartEmpty ? "hidden" : "visible")};
    }
  }
`;
