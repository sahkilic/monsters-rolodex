import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

import "./App.css";

// Deploy - Github lets us host static pages for free npm add gh-pages

// Could go React.Component instead of importing it above, of course.
class App extends Component {
  constructor() {
    // Gives us access to the super class's constructor, which gives us the state, and we can use properties/methods in this
    // Also gives us access to tons of methods, like setState() - takes an object of properties we want to change
    // We're not allowed to modify state in React without calling setState(), when it's called, the state changes, when the state changes Render() gets called to render changes
    // Dummy Data - https://jsonplaceholder.typicode.com/users
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  // Lifecycle methods are methods that get called at different stages of rendering by the component, automatically be React
  // Main one we're using first is componentDidMount - which gets called when our app renders for the first time.

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  // Writing our own methods here. We use this when we use event handlers hence taking e for event object.
  // If we use a normal function, the scope of 'this' changes, so we need to do an arrow function to get access - lexical scope
  // Another way is to bind the 'this' keyword to it in our constructor like -> this.handleChange = this.handleChange.bind(this);
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  // Destructuring is just delcaring what items you want from an arr/obj then going = the full list
  // Antyhing inside {} in the JSX below is a JS Expression
  render() {
    const { monsters, searchField } = this.state;

    // filter method returns are new array (if we return true when processing an element)
    // includes() check whether the passed string value matches the element we're checking then returns a boolean
    const filteredMonsters = monsters.filter((el) =>
      el.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      // Map returns something whereas forEach doesn't, so we use map.
      // We need to add a key for each child in list, otherwise we get errors, so we make ids
      // onChange method lets us handle this synthetic event, just like events in the DOM - it has everything the native one does, including the event object
      // setState is asyncronous, the second argument (callback) outputs the fullfilled promise
      // Never put setState() in render() because every time we setState we re-render, and every time we re-render we set state, infinite loop.
      // The reason why the SearchField state is up there and not here is because the below two components both use it, so if we left the state here in SearchBox, the other compoennt (CardList) won't be able to read it.
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;

/* Previously a function, we made it a class
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello, here's some more text!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/
