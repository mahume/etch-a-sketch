import styled from 'styled-components';
import { ReactComponent as Rainbow } from '../../svg/rainbow.svg';
import { ReactComponent as Graybow } from '../../svg/graybow.svg';
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
  display: flex;
  flex-direction: column;
`;

export const StyledRainbow = styled(Rainbow)`
  width: 50px;
  margin-left: 25px;
  margin-top: 25px;
  cursor: pointer;

  g>g>path.cls-2 {
    fill: #ff931e;
  }
  g>g>path.cls-3 {
    fill: #ff0;
  }
  g>g>path.cls-4 {
    fill: #7ac943;
  }
  g>g>path.cls-6 {
    fill: #2e3192;
  }
`;

export const StyledGraybow = styled(Graybow)`
  width: 50px;
  margin-left: 25px;
  margin-top: 25px;
  cursor: pointer;

  g>g>path.cls-1 {
    fill: #3e3e40;
  }
  g>g>path.cls-2 {
    fill: #7c7c80;
  }
`;