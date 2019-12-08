import React from 'react';
import { CoordinatesProvider } from '../../context/Coordinates';
import Logo from '../Logo/index';
import Screen from '../Screen/index';
import Arrow from '../Arrow/index';
import Knob from "../Knob/index";
import { Body } from "./styles";

const EtchASketch = () => {
  return (
    <CoordinatesProvider>
      <Body />
      <Logo />
      <Screen />
      <Arrow position="left" />
      <Arrow position="right" />
      <Knob position="left" />
      <Knob position="right" />
    </CoordinatesProvider>
  )
}

export default EtchASketch;