import React, { useContext } from 'react';
import styled, { keyframes } from 'styled-components';
import { DegreeXContext, DegreeYContext } from '../../context/Store';
import SettingsCard from '../SettingsCard/index';
import Logo from '../Logo/index';
import Screen from '../Screen/index';
import Arrow from '../Arrow/index';
import Cog from '../Cog/index';
import Knob from "../Knob/index";
import { Body } from "./styles";

const shake = keyframes`
  0% {
    transform: rotate(0deg);
  }
  20% {
    transform: rotate(10deg);
    translate: 10% -5%;
  }
  40% {
    transform: rotate(-10deg);
    translate: -5% 5%;
  }
  60% {
    transform: rotate(10deg);
    translate: 10% -5%;
  }
  80% {
    transform: rotate(-10deg);
    translate: -5% 5%;
  }
  100% {
    transform: rotate(0deg);
  }
`;

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

export default styled(EtchASketch)`
  animation-name: ${({ isErased }) => isErased ? shake : 'none' };
  animation-duration: 750ms;
  animation-iteration-count: 1;
`;