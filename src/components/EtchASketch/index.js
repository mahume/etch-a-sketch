import React, { useContext } from 'react';
import { DirectionXContext, DirectionYContext } from '../../context/Store';
import Logo from '../Logo/index';
import Screen from '../Screen/index';
import Arrow from '../Arrow/index';
import Knob from "../Knob/index";
import { Body } from "./styles";

const EtchASketch = () => {
  const [directionX] = useContext(DirectionXContext);
  const [directionY] = useContext(DirectionYContext);

  return (
    <>
      <Body />
      <Logo />
      <Screen />
      <Arrow position="left" />
      <Arrow position="right" />
      <Knob position="left" direction={directionX} />
      <Knob position="right" direction={directionY} />
    </>
  )
}

export default EtchASketch;