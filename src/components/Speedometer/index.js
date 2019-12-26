import React, { useContext } from 'react';
import { SpeedContext } from '../../context/Store';
import { StyledSpeedometer } from './styles';

const Speedometer = () => {
  const [speed, setSpeed] = useContext(SpeedContext);

  const toggleSpeed = () => {
    const speedOptions = [0.1, 0.5, 1];
    const currSpeedIndex = speedOptions.findIndex(option => option === speed)
    if (currSpeedIndex === speedOptions.length - 1) {
      setSpeed(0.1)
    } else {
      const newSpeed = speedOptions[currSpeedIndex + 1]
      setSpeed(newSpeed)
    }
  }

  return (
    <StyledSpeedometer 
      onClick={toggleSpeed}
      speed={speed}
    />
  )
}

export default Speedometer;