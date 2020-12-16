import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className= "person">
        <p>I am {props.name} and I am {props.age} years old</p>
        <p>{props.children}</p>
        </div>
    )
}


export default person