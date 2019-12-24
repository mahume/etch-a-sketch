import styled, { keyframes } from 'styled-components';

const shake = keyframes`
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(10deg);
    translate: 10% -5%;
  }
  40% {
    transform: rotate(-10deg);
    translate: -5% 5%;
  }
  60% {
    transform: rotate(10deg);
    translate: 10% -5%;
  }
  80% {
    transform: rotate(-10deg);
    translate: -5% 5%;
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const Grid = styled.div`
  width: 100vw;
  height: 100vh;

  animation-name: ${({ isErased }) => isErased ? shake : 'none' };
  animation-duration: 750ms;
  animation-iteration-count: 1;

  display: grid;
  grid-template-columns: 1fr 143px 625px 143px 1fr;
  grid-template-rows: 1fr 132px 450px 178px 1fr;
`;