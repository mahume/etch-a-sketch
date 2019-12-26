import styled from 'styled-components';
import { ReactComponent as Graybow } from '../../svg/graybow.svg';

export const StyledGraybow = styled(Graybow)`
  width: 50px;
  margin-left: 25px;
  cursor: pointer;

  g>g>path.cls-1 {
    fill: #3e3e40;
  }
  g>g>path.cls-2 {
    fill: #7c7c80;
  }
`;