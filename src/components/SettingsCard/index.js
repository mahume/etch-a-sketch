import React, { useContext } from 'react';
import Rainbow from '../Rainbow/index';
import Graybow from '../Graybow/index';
import Speedometer from '../Speedometer/index';
import Eraser from '../Eraser/index';
import { Canvas } from './styles';
import { IsViewableContext, IsColoredContext } from '../../context/Store'

const SettingsCard = () => {
  const [isViewable] = useContext(IsViewableContext);
  const [isColored] = useContext(IsColoredContext);

  return (
    <Canvas isViewable={isViewable} >
      <Speedometer />
      {isColored
          ? <Rainbow /> 
          : <Graybow />
      }
      <Eraser />
    </Canvas>
  )
}

export default SettingsCard;