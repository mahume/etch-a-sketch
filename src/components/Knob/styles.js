import styled from 'styled-components';
import { grays } from "../../utils/styleTemplate";

export const Circle = styled.div`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border-right: 6px solid ${grays.midLight};
  border-bottom: 6px solid ${grays.midLight};
  background-color: ${grays.light};
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);

  grid-row: 4 / 5;
  grid-column-start: ${({ position }) => position === 'left' ? '2' : '4'};
  grid-column-end: ${({ position }) => position === 'left' ? '3' : '5'};
  justify-self: ${({ position }) => position === 'right' ? 'start' : 'end'};
  align-self: center;
`;