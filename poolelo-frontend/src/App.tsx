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

function App() {
  return (
      <Router>
        <div>
          <NavBar/>
        </div>

        <Switch>
          <Route path="/record">
            <RecordForm/>
          </Route>
          <Route path="/">
            <Rankings/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
