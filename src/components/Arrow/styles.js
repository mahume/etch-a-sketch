import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../svg/arrow.svg';
import { reds } from "../../utils/styleTemplate";

export const StyledArrow = styled(Arrow)`
  width: 60px;
  transform: ${({ position }) => position === 'right' ? 'rotate(90deg)' : 'none'};
  filter: ${({ position }) => position === 'left' 
    ? `drop-shadow(0px 1px 0.5px ${reds.darkMid})`
    : `drop-shadow(1px 0px 0.5px ${reds.darkMid})`};

  grid-column-start: ${({ position }) => position === 'left' ? '2' : '4'};
  grid-column-end: ${({ position }) => position === 'left' ? '3' : '5'};
  grid-row: 3 / 4;
  justify-self: center;
  align-self: flex-end;
`;