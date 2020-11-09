import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import CharacterPage from '../../pages/CharacterPage';
import Header from '../../header/Header';
import CharacterDetailPage from '../../pages/CharacterDetailPage';

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route
          exact
          path="/"
          component={CharacterPage}
        />
        <Route
          exact
          path="/character/:id"
          component={CharacterDetailPage}
        />
      </Switch>
    </Router>
  );
}
