import React, { useContext } from 'react';
import { DegreeXContext, DegreeYContext } from '../../context/Store';
import Logo from '../Logo/index';
import Screen from '../Screen/index';
import Arrow from '../Arrow/index';
import Knob from "../Knob/index";
import { Body } from "./styles";

const EtchASketch = () => {
  const [degreeX] = useContext(DegreeXContext);
  const [degreeY] = useContext(DegreeYContext);

  return (
    <>
      <Body />
      <Logo />
      <Screen />
      <Arrow position="left" />
      <Arrow position="right" />
      <Knob position="left" degree={degreeX} />
      <Knob position="right" degree={degreeY} />
    </>
  )
}

export default EtchASketch;