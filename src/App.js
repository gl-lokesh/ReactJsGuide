import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"
import Radium, { StyleRoot } from 'radium';

class App extends Component {

  state = {
    persons: [
      { id: "ewaeqwe", name: "Max", age: 28 },
      { id: "eqwewqegf", name: "Manu", age: 29 },
      { id: "bvgreretr", name: "Lokesh", age: 30 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log("Was Clicked!")
    this.setState({
      persons: [
        { id: "ewaeqwe", name: newName, age: 28 },
        { id: "eqwewqegf", name: "Manu", age: 29 },
        { id: "bvgreretr", name: "Lokesh", age: 40 }
      ]

    })
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });


    // this.setState({
    //   persons: [
    //     { name: "Max", age: 28 },
    //     { name: event.target.value, age: 29 },
    //     { name: "Lokesh", age: 40 }
    //   ]

    // })
  }

  togglePersonHandler = () => {
    const doesShows = this.state.showPersons;
    this.setState({ showPersons: !doesShows });
  }

  deletePersonHandler = (personIndex) => {
    // const p = this.state.persons;
    const p = [...this.state.persons]
    p.splice(personIndex, 1);
    this.setState({ persons: p })
  }
  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }

    };

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
    let personsTag = null;
    if (this.state.showPersons) {
      personsTag = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event => this.nameChangedHandler(event, person.id))} />
          })}
        </div>
      )
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    return (
      <ErrorBoundary>
        <StyleRoot>
          <div className="App">
            <h1>I am React app</h1>
            <p className={classes.join(' ')}>This is really working!</p>

            <button
              style={style}
              onClick={this.togglePersonHandler}>Switch Name </button>
            {personsTag}
          </div>
        </StyleRoot>
      </ErrorBoundary>
    );
  }
}

export default Radium(App);
