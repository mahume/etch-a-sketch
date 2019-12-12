import styled from 'styled-components';
import { ReactComponent as Cog } from '../../svg/cog.svg';
import { reds } from '../../utils/styleTemplate';

export const StyledCog = styled(Cog)`
  width: 50px;
  filter: drop-shadow(0px 1px 0.5px ${reds.darkMid});
  g>g>circle {
    fill: ${reds.midLight};
  }

  grid-row: 3 / 4;
  grid-column: 2 / 3;
  justify-self: center;
  align-self: flex-start;
`;