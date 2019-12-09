const handleDraw = options => {
  const { 
    directionX, 
    directionY,
    coordinateX,
    setCoordinateX, 
    coordinateY,
    setCoordinateY,
    speed
  } = options;

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
}

export default handleDraw;