import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyledCanvas } from "./styles";
import { grays } from "../../utils/styleTemplate";
import handleDraw from '../../utils/handleDraw';
import handleArrowDirection from '../../utils/handleArrowDirection';
import handleDegree from '../../utils/handleDegree';
import { 
  DegreeXContext, 
  DegreeYContext, 
  SpeedContext,
  IsColoredContext,
  HueContext,
  IsErasedContext,
} from '../../context/Store';

const Screen = () => {
  const ref = useRef();
  const [hue, setHue] = useContext(HueContext);
  const [isColored] = useContext(IsColoredContext);
  const [speed] = useContext(SpeedContext);
  const [degreeX, setDegreeX] = useContext(DegreeXContext);
  const [degreeY, setDegreeY] = useContext(DegreeYContext);
  const [isErased] = useContext(IsErasedContext);
  const [dimensions] = useState({ x: 1300, y: 900 });
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

    isColored
      ? ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
      : ctx.strokeStyle = grays.dark;

    if (isErased) {
      ctx.clearRect(0, 0, dimensions.x, dimensions.y);
    }
    
    ctx.beginPath();
    ctx.moveTo(coordinateX, coordinateY);

    handleDraw({ directionX, directionY, coordinateX, setCoordinateX, coordinateY, setCoordinateY, hue, setHue, speed });

    ctx.lineTo(coordinateX, coordinateY);
    ctx.stroke();
    
    return () => {
      window.removeEventListener('keydown', handleKeyEvent);
      window.removeEventListener('keyup', handleKeyEvent);
    }
  }, [coordinateX, coordinateY, degreeX, degreeY, dimensions.x, dimensions.y, directionX, directionY, hue, isColored, isErased, setDegreeX, setDegreeY, setHue, speed])
  
  return (
    <StyledCanvas 
      ref={ref}
      width={dimensions.x}
      height={dimensions.y}
    />
  )
}

export default Screen;