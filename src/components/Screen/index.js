import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyledCanvas } from "./styles";
import { grays } from "../../utils/styleTemplate";
import { DegreeXContext, DegreeYContext, SpeedContext } from '../../context/Store';
import handleDraw from '../../utils/handleDraw';
import handleArrowDirection from '../../utils/handleArrowDirection';
import handleDegree from '../../utils/handleDegree';

const Screen = () => {
  const ref = useRef();
  const [speed] = useContext(SpeedContext);
  const [degreeX, setDegreeX] = useContext(DegreeXContext);
  const [degreeY, setDegreeY] = useContext(DegreeYContext);
  const [dimensions] = useState({ x: 1274, y: 924 });
  const [directionX, setDirectionX] = useState(null);
  const [directionY, setDirectionY] = useState(null);
  const [coordinateX, setCoordinateX] = useState(Math.floor(Math.random() * dimensions.x));
  const [coordinateY, setCoordinateY] = useState(Math.floor(Math.random() * dimensions.y));
  
  useEffect(() => {
    const handleKeyEvent = e => handleArrowDirection(e, setDirectionX, setDirectionY)
    handleDegree({ speed, directionX, directionY, degreeX, setDegreeX, degreeY, setDegreeY });
    
    window.addEventListener('keydown', handleKeyEvent);
    window.addEventListener('keyup', handleKeyEvent); 

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
      window.removeEventListener('keydown', handleKeyEvent);
      window.removeEventListener('keyup', handleKeyEvent);
    }
  }, [coordinateX, coordinateY, degreeX, degreeY, directionX, directionY, setDegreeX, setDegreeY, setDirectionX, setDirectionY, speed])
  
  return (
    <StyledCanvas 
      ref={ref} 
      width={dimensions.x} 
      height={dimensions.y}
    />
  )
}

export default Screen;