import React, { useContext } from 'react';
import { DegreeXContext, DegreeYContext } from '../../context/Store';
import SettingsCard from '../SettingsCard/index';
import Logo from '../Logo/index';
import Screen from '../Screen/index';
import Arrow from '../Arrow/index';
import Cog from '../Cog/index';
import Knob from "../Knob/index";
import { Body } from "./styles";

const EtchASketch = () => {
  const [degreeX] = useContext(DegreeXContext);
  const [degreeY] = useContext(DegreeYContext);

  return (
    <>
      <SettingsCard />
      <Body />
      <Logo />
      <Cog />
      <Screen />
      <Arrow position="left" />
      <Arrow position="right" />
      <Knob position="left" degree={degreeX} />
      <Knob position="right" degree={degreeY} />
    </>
  )
}

export default EtchASketch;