import React from 'react';
import { Circle, Triangle } from "./styles";

const Knob = ({ position }) => {
  return (
    <Circle position={position}>
      <Triangle />
    </Circle>
  )
}

export default Knob;