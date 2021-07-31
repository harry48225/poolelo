import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import {Rankings} from './Rankings';
import {RecordForm} from './RecordForm';
import { NavBar } from './NavBar';
import './App.scss';

const testPlayers = [
    {
        name: "Rupert",
        id: 1,
        ELO: 1000,
        hasImproved: true,
    },
    {
        name: "Harry",
        id: 2,
        ELO: 1000,
        hasImproved: false,
    },
    {
        name: "Amar",
        id: 3,
        ELO: 1000,
        hasImproved: true,
    },
    {
        name: "Marcus",
        id: 4,
        ELO: 1000,
        hasImproved: false,
    },
    {
        name: "Martina",
        id: 5,
        ELO: 1000,
        hasImproved: true,
    },
    {
        name: "Reece",
        id: 6,
        ELO: 1000,
        hasImproved: true,
    },
    {
        name: "Andrei",
        id: 7,
        ELO: 1000,
        hasImproved: true,
    },
]

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
        <div>
          <NavBar/>
        </div>

        <Switch>
          <Route path="/record">
            <RecordForm players={testPlayers}/>
          </Route>
          <Route path="/">
            <Rankings/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
