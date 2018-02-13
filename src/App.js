import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {

  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 },
      { name: "Lokesh", age: 30 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log("Was Clicked!")
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Manu", age: 29 },
        { name: "Lokesh", age: 40 }
      ]

    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "Lokesh", age: 40 }
      ]

    })
  }

  togglePersonHandler = () => {
    const doesShows = this.state.showPersons;
    this.setState({ showPersons: !doesShows });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };
    return (
      <div className="App">
        <h1>I am React app</h1>
        <p>This is really working!</p>

        <button
          style={style}
          onClick={this.togglePersonHandler}>Switch Name </button>
        { 
          this.state.showPersons ? 
          <div>
            <Person name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Max")}
              changed={this.nameChangedHandler}>
              My Hobbies: Playing Cricket </Person>
            <Person name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div> : null
        }
      </div>
    );
  }
}

export default App;