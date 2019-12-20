import React, { useContext } from 'react';
import { Canvas, StyledRainbow, StyledGraybow, StyledEraser } from './styles';
import { IsViewableContext, IsColoredContext, IsErasedContext } from '../../context/Store'
import handleErase from '../../utils/handleErase';

const SettingsCard = () => {
  const [isViewable] = useContext(IsViewableContext);
  const [isColored, setIsColored] = useContext(IsColoredContext);
  const [isErased, setIsErased] = useContext(IsErasedContext);

  return (
    <Canvas isViewable={isViewable} >
      {
        isColored
          ? <StyledRainbow onClick={() => setIsColored(!isColored)} /> 
          : <StyledGraybow onClick={() => setIsColored(!isColored)} />
      }
      <StyledEraser onClick={() => handleErase(isErased, setIsErased)} />
    </Canvas>
  )
}

export default SettingsCard;