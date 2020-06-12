import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux';

import store from './store'
import Home from './pages/Home'
import NewTask from './pages/NewTask'

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1> Task manager </h1>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create-task" component={NewTask} />
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
