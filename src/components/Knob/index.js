import React from 'react';
import { Circle, Marker } from "./styles";

const Knob = ({ position, direction }) => {
  return (
    <Circle position={position}>
      <Marker direction={direction} />
    </Circle>
  )
}

export default Knob;