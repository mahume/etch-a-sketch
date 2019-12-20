const handleErase = (isErased, setIsErased) => {
  if (!isErased) {
    setIsErased(true)
  }
  setTimeout(() => {
    setIsErased(false);
  }, 1000);
}

export default handleErase;