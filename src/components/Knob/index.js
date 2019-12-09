import React from 'react';
import { Circle, Marker } from "./styles";

const Knob = ({ position, direction }) => (
    <Circle position={position}>
      <Marker direction={direction} />
    </Circle>
)

export default Knob;