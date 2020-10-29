/* eslint-disable max-len */
import React from 'react';
import { useState } from 'react';
import ListOfCharacters from '../components/character/characterList/CharacterList';

const CharacterPage = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <button 
        onClick={() => setPage(page => page - 1)}
        disabled={page <= 1}>
        prev</button>
      <button
        onClick={() => setPage(page => page + 1)}>
        next</button>
      <ListOfCharacters page={page} />
    </>
  );
};

export default CharacterPage;
