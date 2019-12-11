const handleArrowDirection = (e, setDirectionX, setDirectionY) => {
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

export default handleArrowDirection;