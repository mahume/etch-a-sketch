import React from 'react';
import Screen from '../Screen/index';
import Arrow from '../Arrow/index';
import Knob from "../Knob/index";
import { Main } from "./styles";

const Body = () => {
  return (
    <>
      <Main />
      <Screen />
      <Arrow position="left" />
      <Arrow position="right" />
      <Knob position="left" />
      <Knob position="right" />
    </>
  )
}

export default Body;