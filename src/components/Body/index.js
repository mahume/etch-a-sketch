import React from 'react';
import Screen from '../Screen/index';
import Knob from "../Knob/index";
import { Main } from "./styles";

const Body = () => {
  return (
    <>
      <Main />
      <Screen />
      <Knob position="left" />
      <Knob position="right" />
    </>
  )
}

export default Body;