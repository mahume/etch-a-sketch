import React, { useContext } from 'react';
import { StyledCog } from './styles';
import { IsViewableContext } from '../../context/Store';

const Cog = () => {
  const [isViewable, setIsViewable] = useContext(IsViewableContext);

  return (
    <StyledCog 
      onClick={() => setIsViewable(!isViewable)}
      isViewable={isViewable}
    />
  )
}

export default Cog;