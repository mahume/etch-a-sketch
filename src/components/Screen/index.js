import React, { useState, useEffect, useRef, useContext } from 'react';
import { CoordinatesContext } from '../../context/Coordinates';
import { StyledCanvas } from "./styles";
import { grays } from "../../utils/styleTemplate";

const Screen = () => {
  const ref = useRef();

  const [dimensions, setDimensions] = useState({ x: 1274, y: 924 });
  const [coordinates, setCoordinates] = useContext(CoordinatesContext);
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
    ctx.moveTo(coordinates.x, coordinates.y);

    switch (directionX) {
      case 'ArrowLeft':
        setCoordinates({ ...coordinates, x: coordinates.x - speed });
        break;
      case 'ArrowRight':
        setCoordinates({ ...coordinates, x: coordinates.x + speed });
        break;
      default:
        break;
    }
    switch (directionY) {
      case 'ArrowUp':
        setCoordinates({ ...coordinates, y: coordinates.y - speed });
        break;
      case 'ArrowDown':
        setCoordinates({ ...coordinates, y: coordinates.y + speed });
        break;
      default:
        break;
    }

    ctx.lineTo(coordinates.x, coordinates.y);
    ctx.stroke();
    
    return () => {
      window.removeEventListener('keydown', handleKeyEvent);
      window.removeEventListener('keyup', handleKeyEvent);
    }
  }, [coordinates, coordinates.x, coordinates.y, directionX, directionY, setCoordinates, speed])
  
  return (
    <StyledCanvas 
      ref={ref} 
      width={dimensions.x} 
      height={dimensions.y}
    />
  )
}

export default Screen;