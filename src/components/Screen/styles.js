import styled from 'styled-components';
import { colorPalette } from "../../utils/styleTemplate";

const { grayLight, grayDark } = colorPalette;

export const Figcaption = styled.figcaption`
  background: linear-gradient(${grayDark}, ${grayLight});
  border-top: 10px solid ${colorPalette.redDark};
  border-right: 10px solid ${colorPalette.redPale};
  border-bottom: 10px solid ${colorPalette.redPale};
  border-left: 10px solid ${colorPalette.redDark};
  border-radius: 30px;
  box-shadow: inset 0px 0px 20px 0px rgba(0, 0, 0, 0.5);

  grid-row: 3 / 4;
  grid-column: 3 / 4;
`;

