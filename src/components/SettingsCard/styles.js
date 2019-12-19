import styled from 'styled-components';
import { ReactComponent as Rainbow } from '../../svg/rainbow.svg';
import { grays } from '../../utils/styleTemplate';

export const Canvas = styled.div`
  width: ${({ isViewable }) => isViewable ? '100px' : '0px'};
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

export const StyledRainbow = styled(Rainbow)`
  width: 50px;

  g>g>path.cls-2 {
    fill: #ff931e;
  }

  display: flex;
  flex-direction: column;
`;