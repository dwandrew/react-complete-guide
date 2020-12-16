import React, { useState } from 'react';

import './App.css';
import Person from './Components/Person/Person'

const App = (props) => {

  const [peopleState, setPeople] = useState({
    people: [
      {name: "Brian", age: 22},
      {name: "Charlie", age: 28},
      {name: "Penelope", age: 31}


    ]
  })


  const changeNameHandler = () =>{
    setPeople(
      {people: [
        {name: "Devin", age: 22},
        {name: "Charlie", age: 28},
        {name: "Penelope", age: 31}

      ]}
    )
  }

  return (
      <div className="App">
        <h1>React app</h1>
        <button onClick = {changeNameHandler}>Change name</button>
        <Person name = {peopleState.people[0].name} age ={peopleState.people[0].age}/>
        <Person name = {peopleState.people[1].name} age ={peopleState.people[1].age}/>
        <Person name = {peopleState.people[2].name} age ={peopleState.people[2].age}/>

      
      </div>
    );
}

export default App;
