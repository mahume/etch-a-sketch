import React, { useContext } from 'react';
import { Canvas, StyledRainbow, StyledGraybow, StyledEraser } from './styles';
import { 
  IsViewableContext, 
  IsColoredContext,
  IsErasedContext
} from '../../context/Store'

const SettingsCard = () => {
  const [isViewable] = useContext(IsViewableContext);
  const [isColored, setIsColored] = useContext(IsColoredContext);
  const [isErased, setIsErased] = useContext(IsErasedContext);

  const eraseTimeout = () => {
    setIsErased(true);
    setTimeout(() => setIsErased(false), 650);
  }

  return (
    <Canvas isViewable={isViewable} >
      {
        isColored
          ? <StyledRainbow onClick={() => setIsColored(!isColored)} /> 
          : <StyledGraybow onClick={() => setIsColored(!isColored)} />
      }
      <StyledEraser onClick={eraseTimeout} />
    </Canvas>
  )
}

export default SettingsCard;