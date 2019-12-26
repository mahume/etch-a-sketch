import styled from 'styled-components';
import { ReactComponent as Speedometer } from '../../svg/speedometer.svg';

export const StyledSpeedometer = styled(Speedometer)`
  width: 60px;
  margin-left: 25px;
  cursor: pointer;

  g>g>path.speed-cls-3 {
    transform-origin: 50% 50%;
    transform: rotate(-80deg);
  }
`;