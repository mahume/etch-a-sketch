const handleDraw = args => {
  const { 
    directionX, 
    directionY, 
    coordinateX, 
    setCoordinateX, 
    coordinateY, 
    setCoordinateY, 
    setHue,
    speed 
  } = args;
  let { hue } = args;

  switch (directionX) {
    case 'ArrowLeft':
      setHue(hue = hue + 0.1);
      setCoordinateX(coordinateX - speed);
      break;
    case 'ArrowRight':
      setHue(hue = hue + 0.1);
      setCoordinateX(coordinateX + speed);
      break;
    default:
      break;
  }

  switch (directionY) {
    case 'ArrowUp':
      setHue(hue = hue + 0.1);
      setCoordinateY(coordinateY - speed);
      break;
    case 'ArrowDown':
      setHue(hue = hue + 0.1);
      setCoordinateY(coordinateY + speed);
      break;
    default:
      break;
  }
}

export default handleDraw;