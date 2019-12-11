import styled from 'styled-components';
import { grays, reds } from "../../utils/styleTemplate";

export const Circle = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border-top: 6px solid ${grays.light};
  border-right: 6px solid ${grays.mid};
  border-bottom: 6px solid ${grays.mid};
  border-left: 6px solid ${grays.light};
  background-color: ${grays.midLight};
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);

  grid-row: 4 / 5;
  grid-column-start: ${({ position }) => position === 'left' ? '2' : '4'};
  grid-column-end: ${({ position }) => position === 'left' ? '3' : '5'};
  justify-self: ${({ position }) => position === 'right' ? 'start' : 'end'};
  align-self: center;
`;

export const Marker = styled.div`
  width: 100%;
  height: 100%;
  clip-path: circle(3% at 50% 13%);
  background-color: ${reds.midLight};
  transform-origin: center;
`;