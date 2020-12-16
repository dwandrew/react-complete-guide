import React, { Component } from 'react';

import './App.css';
import Person from './Components/Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <Person name = "Brian" age ="22"/>
        <Person name = "Charlie" age ="28"/>
        <Person name = "Penelope" age ="31"/>
      
      </div>
    );
  }
}

export default App;
