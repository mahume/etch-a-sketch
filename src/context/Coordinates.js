import React, { createContext, useState } from 'react';

export const CoordinatesContext = createContext();

export const CoordinatesProvider = props => {
  const [coordinates, setCoordinates] = useState({ 
    x: Math.floor(Math.random() * 1274),
    y: Math.floor(Math.random() * 924),
  });

  return (
    <CoordinatesContext.Provider value={[coordinates, setCoordinates]}>
      {props.children}
    </CoordinatesContext.Provider>
  )
}

