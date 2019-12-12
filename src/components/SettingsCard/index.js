import React, { useContext } from 'react';
import { Canvas, Settings } from './styles';
import { IsViewableContext } from '../../context/Store'

const SettingsCard = () => {
  const [isViewable] = useContext(IsViewableContext);

  return (
    <Canvas isViewable={isViewable} >
      <Settings>Settings</Settings>
    </Canvas>
  )
}

export default SettingsCard;