import React, { useContext } from 'react';
import { IsColoredContext } from '../../context/Store'
import { StyledRainbow } from './styles';

const Rainbow = () => {
  const [isColored, setIsColored] = useContext(IsColoredContext);

  return (
    <StyledRainbow 
      onClick={() => setIsColored(!isColored)} 
    />
  )
}

export default Rainbow;