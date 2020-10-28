/* eslint-disable max-len */
export const getRickAndMortyPeeps = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(characters => characters.results.map(character => ({
      id: character.id,
      name: character.name,
      imageUrl: character.image
    })));
};
