import React, { useEffect, useRef} from 'react';
import { StyledCanvas } from "./styles";

const width = 637;
const height = 462;
let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

const Screen = () => {
  const ref = useRef();

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    ctx.fillRect(x, y, 10, 10);
  })

  // const moveAmount = 10;

  return (
    <StyledCanvas 
      ref={ref} 
      width={width} 
      height={height}
    />
  )
}

export default Screen;