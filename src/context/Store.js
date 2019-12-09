import React, { createContext, useState } from 'react';

export const DirectionXContext = createContext(null);
export const DirectionYContext = createContext(null);
export const SpeedContext = createContext(0.1);
export const HueContext = createContext(0);

const Store = ({ children }) => {
  const [directionX, setDirectionX] = useState(null);
  const [directionY, setDirectionY] = useState(null);
  const [speed, setSpeed] = useState(0.1);
  const [hue, setHue] = useState(0);
  
  return (
    <DirectionXContext.Provider value={[directionX, setDirectionX]}>
      <DirectionYContext.Provider value={[directionY, setDirectionY]}>
        <SpeedContext.Provider value={[speed, setSpeed]}>
          <HueContext.Provider value={[hue, setHue]}>
            {children}
          </HueContext.Provider>
        </SpeedContext.Provider>
      </DirectionYContext.Provider>
    </DirectionXContext.Provider>
  )
}

export default Store;