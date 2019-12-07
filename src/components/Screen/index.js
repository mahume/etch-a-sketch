import React, { useState, useEffect, useRef} from 'react';
import { StyledCanvas } from "./styles";

const width = 1274;
const height = 924;

const moveAmount = 10;

// const draw = ctx => {
//   // Increment line hue
//   hue += 10;
//   ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
//   // Start the path
//   ctx.beginPath();
//   ctx.moveTo(x, y);
//   // Move value based on user input
//   switch (key) {
//     case 'ArrowUp':
//       y -= moveAmount;
//       break;
//     case 'ArrowDown':
//       y += moveAmount;
//       break;
//     case 'ArrowLeft':
//       x -= moveAmount;
//       break;
//     case 'ArrowRight':
//       x += moveAmount;
//       break;
//     default:
//       break;
//   }
//   ctx.lineTo(x, y);
//   ctx.stroke();
// }

const Screen = ({ handleDirection }) => {
  const ref = useRef();
  const [coordinates, setCoordinates] = useState({
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
  });
  const { x, y } = coordinates;

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 10;
    
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
  })

  return (
    <StyledCanvas 
      ref={ref} 
      width={width} 
      height={height}
      onClick={handleDirection}
    />
  )
}

export default Screen;