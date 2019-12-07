import React, { useState, useEffect, useRef} from 'react';
import { StyledCanvas } from "./styles";
import { grays } from "../../utils/styleTemplate";

const Screen = () => {
  const ref = useRef();

  const [dimensions, setDimensions] = useState({ x: 1274, y: 924 });
  const [coordinateX, setCoordinateX] = useState(Math.floor(Math.random() * dimensions.x));
  const [coordinateY, setCoordinateY] = useState(Math.floor(Math.random() * dimensions.y));
  const [direction, setDirection] = useState(null);
  const [speed, setSpeed] = useState(5);
  
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key.includes('Arrow')) {
        e.preventDefault();
        setDirection(e.key);
      }
    }
    window.addEventListener('keydown', handleKeyDown);

    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 7;
    ctx.strokeStyle = grays.dark;
    
    ctx.beginPath();
    ctx.moveTo(coordinateX, coordinateY);

    switch (direction) {
      case 'ArrowUp':
        setCoordinateY(coordinateY - speed);
        break;
      case 'ArrowDown':
        setCoordinateY(coordinateY + speed);
        break;
      case 'ArrowLeft':
        setCoordinateX(coordinateX - speed);
        break;
      case 'ArrowRight':
        setCoordinateX(coordinateX + speed);
        break;
      default:
        break;
    }

    ctx.lineTo(coordinateX, coordinateY);
    ctx.stroke();

    setDirection(null);
    
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [coordinateX, coordinateY, direction, speed])
  
  return (
    <StyledCanvas 
      ref={ref} 
      width={dimensions.x} 
      height={dimensions.y}
    />
  )
}

export default Screen;