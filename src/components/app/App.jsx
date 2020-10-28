import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ListOfCharacters from '../character/characterList/CharacterList';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={ListOfCharacters}
        />
      </Switch>
    </Router>
  );
}
