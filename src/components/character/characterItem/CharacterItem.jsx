import React from 'react';
import PropTypes from 'prop-types';
import styles from './Character.css';

const CharacterItem = ({ name, imageUrl }) => (
  <div className={styles.details}>
    <figure>
      <img src={imageUrl} alt={name} />
      <figcaption>{name}</figcaption>
    </figure>
  </div>
);

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired
};

export default CharacterItem;
