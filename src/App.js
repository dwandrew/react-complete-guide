import React, { Component } from 'react';

import './App.css';

import Person from './Components/Person/Person'

class App extends Component {
  state  = {
    people: [
      {name: "Brian", age: 22},
      {name: "Charlie", age: 28},
      {name: "Penelope", age: 31}
    ],
    showPeople:true
  }

  
  
  changeNameHandler = () =>{
    this.setState(
      {people: [
        {name: "Devin", age: 22},
        {name: "Charlie", age: 28},
        {name: "Penelope", age: 31}
      ]
      })
  }

  togglePeople = () => {
    this.setState(
      {showPeople: !this.state.showPeople}
    )

  }



  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <button onClick = {this.changeNameHandler}>Change name</button>
        <button onClick = {this.togglePeople}>Toggle People</button>
        {this.state.showPeople ? <div >
          <Person name = {this.state.people[0].name} hage ={this.state.people[0].age}/>
          <Person name = {this.state.people[1].name} age ={this.state.people[1].age}/>
          <Person name = {this.state.people[2].name} age ={this.state.people[2].age}/>
        </div> : null}
      
      </div>
    );
  }
}

export default App;
