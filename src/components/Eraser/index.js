import React, { useContext } from 'react';
import { IsErasedContext } from '../../context/Store';
import { StyledEraser } from './styles';

const Eraser = () => {
  const [isErased, setIsErased] = useContext(IsErasedContext);

  const eraseTimeout = () => {
    setIsErased(true);
    setTimeout(() => setIsErased(false), 650);
  }

  return (
    <StyledEraser
      onClick={eraseTimeout} 
    />
  )
}

export default Eraser;