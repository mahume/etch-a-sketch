import styled from 'styled-components';
import { ReactComponent as Rainbow } from '../../svg/rainbow.svg';

export const StyledRainbow = styled(Rainbow)`
  width: 50px;
  margin-left: 25px;
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