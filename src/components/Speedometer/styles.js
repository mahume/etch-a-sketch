import styled from 'styled-components';
import { ReactComponent as Speedometer } from '../../svg/speedometer.svg';

const handleNeedlePosition = speed => {
  switch (speed) {
    case 0.1:
      return 'rotate(-80deg)';
    case 1:
      return 'rotate(80deg)';
    default:
      return 'rotate(0deg)';
  }
}

export const StyledSpeedometer = styled(Speedometer)`
  width: 60px;
  margin-left: 25px;
  cursor: pointer;

  g>g>path.speed-cls-3 {
    transition-timing-function: ease-in-out;
    transition-duration: 400ms;
    transform-origin: 50% 50%;
    transform: ${({ speed }) => handleNeedlePosition(speed)};
  }
`;