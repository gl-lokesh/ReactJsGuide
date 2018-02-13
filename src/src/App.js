import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person"

class App extends Component {

  state = {
    persons: [
      {id:"ewaeqwe",name: "Max", age: 28 },
      {id:"eqwewqegf",name: "Manu", age: 29 },
      {id:"bvgreretr",name: "Lokesh", age: 30 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log("Was Clicked!")
    this.setState({
      persons: [
        {id:"ewaeqwe",name: newName, age: 28 },
        {id:"eqwewqegf",name: "Manu", age: 29 },
        {id:"bvgreretr",name: "Lokesh", age: 40 }
      ]

    })
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons});


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
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'

    };

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
              changed={(event => this.nameChangedHandler(event, person.id))}/>
          })}
          {/* <Person name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max")}
            changed={this.nameChangedHandler}>
            My Hobbies: Playing Cricket </Person>
          <Person name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
        </div>
      )
    }
    return (
      <div className="App">
        <h1>I am React app</h1>
        <p>This is really working!</p>

        <button
          style={style}
          onClick={this.togglePersonHandler}>Switch Name </button>
        {personsTag}
      </div>
    );
  }
}

export default App;
