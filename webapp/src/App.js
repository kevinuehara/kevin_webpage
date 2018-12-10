import React, { Component } from 'react';
import animateScrollTo from 'animated-scroll-to';
import intl from 'react-intl-universal';

import './App.css';
import Home from './containers/Home';
import Footer from './ui/Footer';
import Navbar from './ui/Navbar';

const locales = {
  'pt-BR': require('./locales/pt-BR.json'),
  'en-US': require('./locales/en-US.json')
};

class App extends Component {

  constructor() {
    super();
    const currentLocale = locales[navigator.language] ? navigator.language : 'pt-BR';

    this.state = {lang: currentLocale}

    intl.init({
      currentLocale,
      locales
    });
  }

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

  changeLangToPortuguese = () => {
    const currentLocale = 'pt-BR';

    intl.init({
      currentLocale,
      locales
    });

    this.setState({lang: currentLocale});
  };

  changeLangToEnglish = () => {
    const currentLocale = 'en-US';

    intl.init({
      currentLocale,
      locales
    });

    this.setState({lang: currentLocale});
  };

  componentWillUnmount() {
    window.onscroll = null;
  }

  handleInitialScrollToAboutMe = () => {
    const options = { speed: 900 };
    animateScrollTo(document.querySelector('.aboutMe'), options);
  };

  handleInitialScrollToHome = () => {
    const options = { speed: 900 };
    animateScrollTo(document.querySelector('.home'), options);
  };

  render() {
    return (
      <div>
        <Navbar intlz={intl} onClickAboutMe={this.handleInitialScrollToAboutMe}
          onClickHome={this.handleInitialScrollToHome} changePort={this.changeLangToPortuguese}
          changeEng={this.changeLangToEnglish} />
        <Home intlz={intl} />
        <Footer />
      </div>
    );
  }
}

export default App;
