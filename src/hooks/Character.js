import { useContext, useEffect, useState } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { getRickAndMortyPeeps } from '../services/rickAndMortyApi';
import { getVideoGameApi } from '../services/videoGameApi';

export const useCharacters = page => {
  const [characters, setCharacters] = useState([]);
  const characterType = useCharacterType();

  const mapBro = {
    rickAndMorty: getRickAndMortyPeeps,
    videoGames: getVideoGameApi
  };

  useEffect(() => {
    getRickAndMortyPeeps(page);
    mapBro[characterType](page)
      .then(fetchedCharacters => setCharacters(fetchedCharacters)); 
  }, [page, characterType]);

  return characters;
};

export const useCharacterToggle = () => {
  const { toggle } = useContext(CharacterContext);
  return toggle;
};

export const useCharacterType = () => {
  const { characterType } = useContext(CharacterContext);
  return characterType;
};
