import React, { useContext } from 'react';
import { Canvas, StyledRainbow } from './styles';
import { IsViewableContext } from '../../context/Store'

const SettingsCard = () => {
  const [isViewable] = useContext(IsViewableContext);

  return (
    <Canvas isViewable={isViewable} >
      <StyledRainbow />
    </Canvas>
  )
}

export default SettingsCard;