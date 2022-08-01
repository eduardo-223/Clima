import styled, { keyframes } from "styled-components";

const pulse = keyframes`
    100%{
        transform: scale(1.2);
        opacity: 0;
    }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.div`
  flex-direction: column;
  width: 100%;

  span {
    z-index: 2;
  }

  h2 {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 8px;
    justify-content: space-between;

    span {
      display: flex;

      svg {
        margin-right: 2px;
      }
    }

    span + span {
      svg {
        color: #c8a951;
      }
    }
  }
`;

export const Pulse = styled.div`
  height: 150px;
  width: 150px;
  margin: 15px auto;
  background: linear-gradient(#81c9fa, #2196f3);
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: var(--white);
  z-index: 2;

  ::before,
  ::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: #2196f3;
    border-radius: 50%;
    z-index: 1;
    opacity: 0.7;
  }

  ::before {
    animation: ${pulse} 2s ease-out infinite;
  }

  ::after {
    animation: ${pulse} 2s 1s ease-out infinite;
  }
`;

export const Content = styled.ul`
  box-shadow: 0px 5px 3px 0px rgb(0 0 0 / 20%);
  border-radius: 0 0 4px 4px;
  background-color: #9bddff;
  padding-left: 8px;
  padding-bottom: 8px;
  li {
    font-weight: 600;

    span {
      font-weight: 400;
    }
  }
`;

export const Info = styled.p`
  border-radius: 4px 4px 0 0;
  background-color: #9bddff;
  padding-left: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 10px;
`;

export const P = styled.p`
  margin: 10px 0;
  font-size: 1.1rem;
  font-weight: 600;
`;
