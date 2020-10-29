import { useContext, useEffect, useState } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { getRickAndMortyPeeps } from '../services/rickAndMortyApi';

export const useCharacters = page => {
  const [characters, setCharacters] = useState([]);
  const characterType = useCharacterType();

  const mapBro = {
    rickAndMorty: getRickAndMortyPeeps
  };

  useEffect(() => {
    getRickAndMortyPeeps(page);
    mapBro[characterType]()
      .then(fetchedCharacters => setCharacters(fetchedCharacters)); 
  }, [page, characterType]);

  return characters;
};

export const useCharacterType = () => {
  const { characterType } = useContext(CharacterContext);
  return characterType;
};
