import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home';
import Navbar from './ui/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
