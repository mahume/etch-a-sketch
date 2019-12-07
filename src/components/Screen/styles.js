import styled from 'styled-components';
import { reds, grays } from "../../utils/styleTemplate";

export const StyledCanvas = styled.canvas`
  height: ${({ height }) => height + 'px'};
  width: ${({ width }) => width + 'px'};
  background: linear-gradient(${grays.darkMid}, ${grays.mid});
  border-top: 6px solid ${reds.dark};
  border-right: 6px solid ${reds.midLight};
  border-bottom: 6px solid ${reds.light};
  border-left: 6px solid ${reds.darkMid};
  border-radius: 30px;
  box-shadow: inset 0px 0px 20px 0px rgba(0, 0, 0, 0.5);

  grid-row: 3 / 4;
  grid-column: 3 / 4;
`;

