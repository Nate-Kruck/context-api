/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useCharacters } from '../../../hooks/Character';
import CharacterItem from '../characterItem/CharacterItem';
import styles from './CharacterList.css';

const ListOfCharacters = ({ page }) => {
  const characters = useCharacters(page);

  const characterElements = characters.map(character => (
    <li key={character.id}>
      <CharacterItem {...character} />
    </li>
  ));

  return (
    <ul data-testid="characters" className={styles.list}>
      {characterElements}
    </ul>
  );
};

ListOfCharacters.propTypes = {
  page: PropTypes.number
};

export default ListOfCharacters;
