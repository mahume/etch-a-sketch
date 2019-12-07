import React, { useEffect, useRef} from 'react';
import { StyledCanvas } from "./styles";

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

const Screen = () => {
  const canvasRef = useRef(null);
  const width = 637;
  const height = 462;
  const moveAmount = 10;

  return (
    <StyledCanvas 
      ref={canvasRef} 
      width={width} 
      height={height}
      onClick={e => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        // ctx.beginPath();
        // ctx.moveTo(x, y);
        // ctx.lineTo(x, y);
        // ctx.stroke();
      }}
    />
  )
}

export default Screen;