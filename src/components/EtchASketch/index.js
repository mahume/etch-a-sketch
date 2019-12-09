import React from 'react';
import Logo from '../Logo/index';
import Screen from '../Screen/index';
import Arrow from '../Arrow/index';
import Knob from "../Knob/index";
import { Body } from "./styles";

const EtchASketch = () => {
  return (
    <>
      <Body />
      <Logo />
      <Screen />
      <Arrow position="left" />
      <Arrow position="right" />
      <Knob position="left" />
      <Knob position="right" />
    </>
  )
}

export default EtchASketch;