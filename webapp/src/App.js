import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home';
import Navbar from './ui/Navbar';

class App extends Component {

  componentDidMount() {
    var div = document.getElementById("navbar");

    window.onscroll = () => {
      if(window.pageYOffset > 212) {
        div.style.backgroundColor="#282828";
      } else {
        div.style.backgroundColor="transparent";
      }
    };
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

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
