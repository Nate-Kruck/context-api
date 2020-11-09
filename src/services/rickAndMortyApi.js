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

export const getRickAndMortyId = async(id) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const json = await res.json();

  return {
    id: json.id,
    name: json.name,
    status: json.status,
    species: json.species,
    imageUrl: json.image
  };
};
