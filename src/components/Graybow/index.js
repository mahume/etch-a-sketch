import React, { useContext } from 'react';
import { IsColoredContext } from '../../context/Store'
import { StyledGraybow } from './styles';

const Graybow = () => {
  const [isColored, setIsColored] = useContext(IsColoredContext);

  return (
    <StyledGraybow 
      onClick={() => setIsColored(!isColored)} 
    />
  )
}

export default Graybow;