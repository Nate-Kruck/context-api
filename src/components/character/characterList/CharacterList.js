import React from 'react';
import { useCharacters } from '../../../hooks/Character';
import CharacterItem from '../characterItem/CharacterItem';
import styles from './CharacterList.css';

const ListOfCharacters = () => {
  const characters = useCharacters();

  const charcterElements = characters.map(character => (
    <li key={character.id}>
      <CharacterItem {...character} />
    </li>
  ));

  return (
    <ul className={styles.List}>
      {charcterElements}
    </ul>
  );
};

export default ListOfCharacters;
