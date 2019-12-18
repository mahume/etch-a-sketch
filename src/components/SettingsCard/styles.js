import styled from 'styled-components';
import { grays } from '../../utils/styleTemplate';

export const Canvas = styled.div`
  width: ${({ isViewable }) => isViewable ? '300px' : '0px'};
  background: linear-gradient(${grays.darkMid}, ${grays.midLight});
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;

  transition-property: width;
  transition-duration: 300ms;
  transition-timing-function: ease-out;

  grid-row: 3 / 4;
  grid-column: 1 / 2;
  justify-self: end;
`;

export const Settings = styled.h1`
  margin: 25px 0px 0px 100px;
  color: white;

  display: flex;
  justify-content: flex-start;
`;