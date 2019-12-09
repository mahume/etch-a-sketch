import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyledCanvas } from "./styles";
import { grays } from "../../utils/styleTemplate";
import { 
  DirectionXContext, 
  DirectionYContext,
  SpeedContext
} from '../../context/Store';

const width = 1274;
const height = 924;

const Screen = () => {
  const ref = useRef();
  const [speed] = useContext(SpeedContext);
  const [directionX, setDirectionX] = useContext(DirectionXContext);
  const [directionY, setDirectionY] = useContext(DirectionYContext);
  const [coordinateX, setCoordinateX] = useState(Math.floor(Math.random() * width));
  const [coordinateY, setCoordinateY] = useState(Math.floor(Math.random() * height));
  
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
  }, [coordinateX, coordinateY, directionX, directionY, setDirectionX, setDirectionY, speed])
  
  return (
    <StyledCanvas 
      ref={ref} 
      width={width} 
      height={height}
    />
  )
}

export default Screen;