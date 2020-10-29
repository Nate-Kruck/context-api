/* eslint-disable max-len */
export const getRickAndMortyPeeps = async(page = 1) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const json = await res.json();
    
  return json.results.map(character => ({
    id: character.id,
    name: character.name,
    imageUrl: character.image
  }));
};
