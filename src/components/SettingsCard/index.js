import React, { useContext } from 'react';
import { Canvas, StyledRainbow, StyledGraybow } from './styles';
import { IsViewableContext, IsColoredContext } from '../../context/Store'

const SettingsCard = () => {
  const [isViewable] = useContext(IsViewableContext);
  const [isColored, setIsColored] = useContext(IsColoredContext);

  return (
    <Canvas isViewable={isViewable} >
      {
        isColored
          ? <StyledRainbow onClick={() => setIsColored(!isColored)} /> 
          : <StyledGraybow onClick={() => setIsColored(!isColored)} />
      }
    </Canvas>
  )
}

export default SettingsCard;