/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import { useCharacters } from '../../../hooks/Character';
import CharacterItem from '../characterItem/CharacterItem';
import styles from './CharacterList.css';
import { Link } from 'react-router-dom';

const ListOfCharacters = ({ page }) => {
  const characters = useCharacters(page);

  const characterElements = characters.map(character => (
    <div key={character.id}>
      <li>
        <Link to={`/character/${character.id}`}>
          <CharacterItem {...character} />
        </Link>
      </li>
    </div>
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
