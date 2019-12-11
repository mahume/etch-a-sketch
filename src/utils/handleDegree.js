const handleDegree = options => {
  const { 
    speed,
    directionX,
    directionY,
    degreeX, 
    setDegreeX,
    degreeY,
    setDegreeY
  } = options;

  switch (directionX) {
    case 'ArrowLeft':
      setDegreeX(degreeX - speed);
      break;
    case 'ArrowRight':
      setDegreeX(degreeX + speed);
      break;
    default:
      break;
    }
  switch (directionY) {
    case 'ArrowDown':
      setDegreeY(degreeY - speed);
      break;
    case 'ArrowUp':
      setDegreeY(degreeY + speed);
      break;
    default:
      break;
  }
}

export default handleDegree;