import React, { useState, useEffect, useRef} from 'react';
import { StyledCanvas } from "./styles";
import { grays } from "../../utils/styleTemplate";

const Screen = () => {
  const ref = useRef();

  const [dimensions, setDimensions] = useState({ x: 1274, y: 924 });
  const [coordinateX, setCoordinateX] = useState(Math.floor(Math.random() * dimensions.x));
  const [coordinateY, setCoordinateY] = useState(Math.floor(Math.random() * dimensions.y));
  const [directionX, setDirectionX] = useState(null);
  const [directionY, setDirectionY] = useState(null);
  const [speed, setSpeed] = useState(0.1);
  
  useEffect(() => {
    const handleKeyEvent = e => {
      const { type, key, keyCode } = e;  
      if (key.includes('Arrow')) {
        e.preventDefault();
        if (type === 'keydown') {
          if (keyCode % 2) {
            setDirectionX(key);
          } else {
            setDirectionY(key);
          }
        } else if (type === 'keyup') {
          if (keyCode % 2) {
            setDirectionX(null);
          } else {
            setDirectionY(null);
          }
        }
      }
    }
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

    switch (directionX) {
      case 'ArrowLeft':
        setCoordinateX(coordinateX - speed);
        break;
      case 'ArrowRight':
        setCoordinateX(coordinateX + speed);
        break;
      default:
        break;
    }
    switch (directionY) {
      case 'ArrowUp':
        setCoordinateY(coordinateY - speed);
        break;
      case 'ArrowDown':
        setCoordinateY(coordinateY + speed);
        break;
      default:
        break;
    }

    ctx.lineTo(coordinateX, coordinateY);
    ctx.stroke();
    
    return () => {
      window.removeEventListener('keydown', handleKeyEvent);
      window.removeEventListener('keyup', handleKeyEvent);
    }
  }, [coordinateX, coordinateY, directionX, directionY, speed])
  
  return (
    <StyledCanvas 
      ref={ref} 
      width={dimensions.x} 
      height={dimensions.y}
    />
  )
}

export default Screen;