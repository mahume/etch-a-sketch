import styled from 'styled-components';
import { ReactComponent as Cog } from '../../svg/cog.svg';
import { reds } from '../../utils/styleTemplate';

export const StyledCog = styled(Cog)`
  width: 50px;
  cursor: pointer;
  filter: ${({ isViewable }) => isViewable
    ? `drop-shadow(0px -2px 0.5px ${reds.darkMid})`
    : `drop-shadow(0px 2px 0.5px ${reds.darkMid})`};

  grid-row: 3 / 4;
  grid-column: 2 / 3;
  justify-self: center;
  align-self: flex-start;
`;