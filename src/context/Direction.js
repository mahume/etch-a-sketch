import React, { useState, createContext } from 'react';

export const DirectionContext = createContext();

export const DirectionProvider = props => {
  return (
    <DirectionContext.Provider>
      {props.children}
    </DirectionContext.Provider>
  )
}