import React from 'react';
import { Circle, Marker } from "./styles";

const Knob = ({ position, degree }) => {
  return (
    <Circle position={position}>
      <Marker style={{ transform: `rotate(${degree}deg)` }} />
    </Circle>
  )
}

export default Knob;