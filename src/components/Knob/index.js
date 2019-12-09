import React, { useState } from 'react';
import { Circle, Marker } from "./styles";

const Knob = ({ position, direction }) => {
  const [degreeX, setDegreeX] = useState(0);
  const [degreeY, setDegreeY] = useState(0);
    
  

  return (
    <Circle position={position}>
      <Marker direction={direction} />
    </Circle>
  )
}

export default Knob;