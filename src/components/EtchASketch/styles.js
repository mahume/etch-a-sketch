import styled from 'styled-components';
import { reds } from "../../utils/styleTemplate";

export const Body = styled.main`
  background-color: ${reds.mid};
  border-top: 10px solid ${reds.light};
  border-right: 10px solid ${reds.darkMid};
  border-bottom: 10px solid ${reds.dark};
  border-left: 10px solid ${reds.midLight};
  border-radius: 10px;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5),
              30px 40px 70px 0px rgba(0, 0, 0, 0.3);

  grid-row: 2 / 5;
  grid-column: 2 / 5;
`;