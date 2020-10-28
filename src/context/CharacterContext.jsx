import React from 'react';
import { useState } from 'react';

export const CharacterContext = React.createContext();

// eslint-disable-next-line react/prop-types
export const CharacterContextProvider = ({ children }) => {
  const [characterType] = useState('rickAndMorty');

  return (
    <CharacterContext.Provider value={{ characterType }}>
      {children}
    </CharacterContext.Provider>
  );
};
