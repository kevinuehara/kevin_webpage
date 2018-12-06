import React, { Component } from 'react';
import animateScrollTo from 'animated-scroll-to';

import './App.css';
import Home from './containers/Home';
import Footer from './ui/Footer';
import Navbar from './ui/Navbar';

class App extends Component {

  componentDidMount() {
    var div = document.getElementById("navbar");

    window.onscroll = () => {
      if (window.pageYOffset > 190) {
        div.style.backgroundColor = "#282828";
      } else {
        div.style.backgroundColor = "transparent";
      }
    };
  }

  componentWillUnmount() {
    window.onscroll = null;
  }

  handleInitialScrollToAboutMe = () => {
    const options = { speed: 900 };
    animateScrollTo(document.querySelector('.aboutMe'), options);
  };

  render() {
    return (
      <div>
        <Navbar onClickAboutMe={this.handleInitialScrollToAboutMe} />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
