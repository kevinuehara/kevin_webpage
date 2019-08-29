import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Projects from '../ui/Projects';
import Contact from '../ui/Contact';
import Presentation from '../ui/Presentation';
import ParallaxMenu from '../ui/ParallaxMenu';
import animateScrollTo from 'animated-scroll-to';
import ScrollAnimation from 'react-animate-on-scroll';

import '../css/Home.css';
import "animate.css/animate.min.css";

import Author from '../images/kevin.jpeg';
import DojotLogo from '../images/dojot-logo.png'
import ParallaxImage from '../images/parallax1.jpg';
import Rednear from '../images/rednear.png';

class Home extends Component {

    constructor(props) {
        super(props);
    }

    handleInitialScrollToAboutMe = () => {
        const options = { speed: 900 };

        animateScrollTo(document.querySelector('.aboutMe'), options);
    };

    render() {
        return (
            <div>
                <ParallaxMenu InitScroll={this.handleInitialScrollToAboutMe} intlz={this.props.intlz} />

                <div className="col-12">
                    <div className="container-fluid">
                        <Presentation imgAuthor={Author} ScrollAnimation={ScrollAnimation} intlz={this.props.intlz}/>
                        <Projects srcImageKevin={Rednear} srcImageDojot={DojotLogo} ScrollAnimation={ScrollAnimation} intlz={this.props.intlz}/>
                        <Contact parallaxSrc={ParallaxImage} ScrollAnimation={ScrollAnimation} intlz={this.props.intlz}/>
                    </div>
                </div>
            </div >

        );
    }
}

Home.propTypes = {
    intlz: PropTypes.object
}

export default Home;