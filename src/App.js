import React, { Component } from 'react';
import logo from './logo.svg';
import Nav from './Components/Nav/Nav.js'
import MacdGrid from './Components/MacdGrid/MacdGrid.js'
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Nav/>
				<MacdGrid/>
      </div>
    );
  }
}

export default App;
