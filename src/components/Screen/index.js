import React, { useState, useEffect, useRef} from 'react';
import { StyledCanvas } from "./styles";

const width = 1274;
const height = 924;
const moveAmount = 10;

const Screen = () => {
  const ref = useRef();
  const [coordinateX, setCoordinateX] = useState(Math.floor(Math.random() * width));
  const [coordinateY, setCoordinateY] = useState(Math.floor(Math.random() * height));
  const [direction, setDirection] = useState(null);
  
  useEffect(() => {
    window.addEventListener('keydown', handleKey);

    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 10;
    
    ctx.beginPath();
    ctx.moveTo(coordinateX, coordinateY);

    switch (direction) {
      case 'ArrowUp':
        setCoordinateY(coordinateY - moveAmount);
        break;
      case 'ArrowDown':
        setCoordinateY(coordinateY + moveAmount);
        break;
      case 'ArrowLeft':
        setCoordinateX(coordinateX - moveAmount);
        break;
      case 'ArrowRight':
        setCoordinateX(coordinateX + moveAmount);
        break;
      default:
        break;
    }

    ctx.lineTo(coordinateX, coordinateY);
    ctx.stroke();

    setDirection(null);
    
    return () => window.removeEventListener('keydown', handleKey);
  }, [coordinateX, coordinateY, direction])
  
  const handleKey = e => {
    if (e.key.includes('Arrow')) {
      e.preventDefault();
      setDirection(e.key);
    }
  }


  return (
    <StyledCanvas 
      ref={ref} 
      width={width} 
      height={height}
    />
  )
}

export default Screen;