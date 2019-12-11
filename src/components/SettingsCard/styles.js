import styled from 'styled-components';
import { grays } from '../../utils/styleTemplate';

export const Canvas = styled.div`
  background-color: ${grays.mid};
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  
  grid-row: 3 / 4;
  grid-column: 1 / 2;
`;