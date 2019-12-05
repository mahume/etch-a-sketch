import styled from 'styled-components';
import { colorPalette } from "../../utils/styleTemplate";

export const Circle = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${colorPalette.grayLight};

  grid-row: 4 / 5;
  grid-column: 2 / 3;
`;