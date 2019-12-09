import React, { useState, useEffect, useRef, useContext } from 'react';
import handleDraw from '../../utils/handleDraw';
import handleKeyEvent from '../../utils/handleKeyEvent';
import { StyledCanvas } from "./styles";
import { grays } from "../../utils/styleTemplate";
import { DirectionXContext, DirectionYContext, SpeedContext } from '../../context/Store';

const Screen = () => {
  const ref = useRef();
  const [speed] = useContext(SpeedContext);
  const [directionX, setDirectionX] = useContext(DirectionXContext);
  const [directionY, setDirectionY] = useContext(DirectionYContext);
  const [dimensions] = useState({ x: 1274, y: 924 });
  const [coordinateX, setCoordinateX] = useState(Math.floor(Math.random() * dimensions.x));
  const [coordinateY, setCoordinateY] = useState(Math.floor(Math.random() * dimensions.y));

  useEffect(() => {
    const handleEvent = e => handleKeyEvent(e, setDirectionX, setDirectionY)

    window.addEventListener('keydown', handleEvent);
    window.addEventListener('keyup', handleEvent);    

    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 7;
    ctx.strokeStyle = grays.dark;
    
    ctx.beginPath();
    ctx.moveTo(coordinateX, coordinateY);

    handleDraw({ directionX, directionY, coordinateX, setCoordinateX, coordinateY, setCoordinateY, speed });

    ctx.lineTo(coordinateX, coordinateY);
    ctx.stroke();
    
    return () => {
      window.removeEventListener('keydown', handleEvent);
      window.removeEventListener('keyup', handleEvent);
    }
  }, [coordinateX, coordinateY, directionX, directionY, setDirectionX, setDirectionY, speed])
  
  return (
    <StyledCanvas 
      ref={ref} 
      width={dimensions.x} 
      height={dimensions.y}
    />
  )
}

export default Screen;