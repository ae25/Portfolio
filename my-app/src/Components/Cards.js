import React, { Component } from 'react'
import "./Card.css"

const Card = (props) => {
    return (
        <div id="card-wrapper">
        <h3 id="card-Title">{props.title}</h3>
        <h5 id = "card-Date">{props.date}</h5>
        <p id= "card-Summary">{props.summary}</p>
    </div>
    );
  };

export default class Projects extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        return (
            <div id="project-wrapper">
                <Card 
                title='Mark'
                date = 'Januaray 2020 - March 2020'
                summary = 'This is a application I developed for a class in school'/>
                <Card 
                title='Lisa'
                date = 'Januaray 2020 - March 2020'
                summary = 'This is a application I developed for a class in school'/>
                <Card 
                title='Julie'
                date = 'Januaray 2020 - March 2020'
                summary = 'This is a application I developed for a class in school'/>
            </div>
        )
    }
}

