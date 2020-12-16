import React, { Component } from 'react';

import './App.css';
import Person from './Components/Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <Person />
      </div>
    );
  }
}

export default App;
