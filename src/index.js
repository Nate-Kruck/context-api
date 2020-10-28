import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import { CharacterContextProvider } from './context/CharacterContext';

render(
  <CharacterContextProvider>
    <App />
  </CharacterContextProvider>,
  document.getElementById('root')
);
