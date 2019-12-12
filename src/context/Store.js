import React, { createContext, useState } from 'react';

export const DegreeXContext = createContext(0);
export const DegreeYContext = createContext(0);
export const SpeedContext = createContext(0.1);
export const HueContext = createContext(0);
export const IsViewableContext = createContext(false);

const Store = ({ children }) => {
  const [degreeX, setDegreeX] = useState(0);
  const [degreeY, setDegreeY] = useState(0);
  const [speed, setSpeed] = useState(0.5);
  const [hue, setHue] = useState(0);
  const [isViewable, setIsViewable] = useState(false);
  
  return (
    <DegreeXContext.Provider value={[degreeX, setDegreeX]}>
      <DegreeYContext.Provider value={[degreeY, setDegreeY]}>
        <SpeedContext.Provider value={[speed, setSpeed]}>
          <HueContext.Provider value={[hue, setHue]}>
            <IsViewableContext.Provider value={[isViewable, setIsViewable]}>
              {children}
            </IsViewableContext.Provider>
          </HueContext.Provider>
        </SpeedContext.Provider>
      </DegreeYContext.Provider>
    </DegreeXContext.Provider>
  )
}

export default Store;