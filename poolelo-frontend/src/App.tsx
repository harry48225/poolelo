import React from 'react';
import logo from './logo.svg';
import {RankingsTable, Player} from './rankingsTable';
import './App.scss';

function App() {
  return (
    <div className="App">
      <RankingsTable players={[]} />
    </div>
  );
}

export default App;
