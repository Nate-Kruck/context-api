import React from 'react';
import { useCharacterToggle } from '../hooks/Character';


const Header = () => {
  const toggle = useCharacterToggle();

  return (
    <>
      <button onClick={toggle}>Toggle API List</button>
    </>
  );
};

export default Header;
