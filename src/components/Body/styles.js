import styled from 'styled-components';
import { colorPalette } from "../../utils/styleTemplate";

export const Main = styled.main`
  background-color: ${colorPalette.red};
  border-top: 10px solid ${colorPalette.redPale};
  border-right: 10px solid ${colorPalette.redDark};
  border-bottom: 10px solid ${colorPalette.redDark};
  border-left: 10px solid ${colorPalette.redPale};
  border-radius: 10px;

  grid-row: 2 / 5;
  grid-column: 2 / 5;
`;