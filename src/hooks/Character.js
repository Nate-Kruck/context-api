/* eslint-disable max-len */
import { useContext, useEffect, useState } from 'react';
import { CharacterContext } from '../context/CharacterContext';
import { getRickAndMortyId, getRickAndMortyPeeps } from '../services/rickAndMortyApi';
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

export const useObjectId = id => {
  const [loading, setLoading] = useState(true);
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getRickAndMortyId(id)
      .then(fetchedCharacter => setCharacter(fetchedCharacter))
      .finally(() => setLoading(false));
  }, [id]);

  return {
    loading,
    character
  };
};
