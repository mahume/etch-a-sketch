import styled from 'styled-components';
import { reds } from "../../utils/styleTemplate";

export const Main = styled.main`
  background-color: ${reds.mid};
  border-top: 10px solid ${reds.light};
  border-right: 10px solid ${reds.darkMid};
  border-bottom: 10px solid ${reds.dark};
  border-left: 10px solid ${reds.midLight};
  border-radius: 10px;

  grid-row: 2 / 5;
  grid-column: 2 / 5;
`;