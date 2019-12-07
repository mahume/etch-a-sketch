import styled from 'styled-components';
import { ReactComponent as Logo } from '../../svg/logo.svg';
import { reds, golds } from '../../utils/styleTemplate';

export const StyledLogo = styled(Logo)`
  width: 500px;
  filter: drop-shadow(0px 2px 0.5px ${reds.darkMid});
  g>g>text:first-child {
    fill: ${golds.light};
  }

  grid-row: 2 / 3;
  grid-column: 3 / 4;
  align-self: flex-end;
  justify-self: center;
`;