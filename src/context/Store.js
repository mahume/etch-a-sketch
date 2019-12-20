import React, { createContext, useState } from 'react';

export const DegreeXContext = createContext(0);
export const DegreeYContext = createContext(0);
export const SpeedContext = createContext(0.1);
export const HueContext = createContext(0);
export const IsColoredContext = createContext(false);
export const IsViewableContext = createContext(false);
export const IsErasedContext = createContext(false);

const Store = ({ children }) => {
  const [degreeX, setDegreeX] = useState(0);
  const [degreeY, setDegreeY] = useState(0);
  const [speed, setSpeed] = useState(0.5);
  const [hue, setHue] = useState(0);
  const [isColored, setIsColored] = useState(false);
  const [isViewable, setIsViewable] = useState(false);
  const [isErased, setIsErased] = useState(false);
  
  return (
    <DegreeXContext.Provider value={[degreeX, setDegreeX]}>
      <DegreeYContext.Provider value={[degreeY, setDegreeY]}>
        <SpeedContext.Provider value={[speed, setSpeed]}>
          <HueContext.Provider value={[hue, setHue]}>
            <IsColoredContext.Provider value={[isColored, setIsColored]}>
              <IsViewableContext.Provider value={[isViewable, setIsViewable]}>
                <IsErasedContext.Provider value={[isErased, setIsErased]}>
                  {children}
                </IsErasedContext.Provider>
              </IsViewableContext.Provider>
            </IsColoredContext.Provider>
          </HueContext.Provider>
        </SpeedContext.Provider>
      </DegreeYContext.Provider>
    </DegreeXContext.Provider>
  )
}

export default Store;