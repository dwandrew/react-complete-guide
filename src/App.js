import React, { Component } from 'react';

import './App.css';
import Person from './Components/Person/Person'

class App extends Component {
  state  = {
    people: [
      {name: "Brian", age: 22},
      {name: "Charlie", age: 28},
      {name: "Penelope", age: 31}


    ]
  }
  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <Person name = {this.state.people[0].name} age ={this.state.people[0].age}/>
        <Person name = {this.state.people[1].name} age ={this.state.people[1].age}/>
        <Person name = {this.state.people[2].name} age ={this.state.people[2].age}/>

      
      </div>
    );
  }
}

export default App;
