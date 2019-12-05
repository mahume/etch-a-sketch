import styled from 'styled-components';
import { colorPalette } from "../../utils/styleTemplate";

export const Main = styled.main`
  background-color: ${colorPalette.red};
  border-radius: 10px;

  grid-row: 2 / 5;
  grid-column: 2 / 5;
`;