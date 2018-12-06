import React, { Component } from 'react';
import animateScrollTo from 'animated-scroll-to';
import ScrollAnimation from 'react-animate-on-scroll';

import '../css/Home.css';
import "animate.css/animate.min.css";

import Background from '../images/background1.jpg';
import Author from '../images/kevin.jpeg';
import ParallaxImage from '../images/parallax1.jpg';

class Home extends Component {

    constructor(props) {
        super(props);
        // this.state = {

        // };
    }

    handleInitialScrollToAboutMe() {
        const options = { speed: 900 };

        animateScrollTo(document.querySelector('.aboutMe'), options);
    }

    render() {

        var background = {
            backgroundImage: "url(" + Background + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: "fixed",
            height: "100vh"
        };

        var parallax = {
            backgroundImage: "url(" + ParallaxImage + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: "fixed",
            height: "40vh"
        }

        return (

            <div>
                <div style={background} className="backgroundImage">
                    <div className="background-overlay">
                        <h1 className="text-name-background">Kevin Uehara</h1>
                        <p className="text-description-background">{this.props.intlz.get('initScreen.title')}</p>
                        <center>
                            <i className="fa fa-caret-square-o-down icon-background" onClick={() => this.handleInitialScrollToAboutMe()}></i>
                        </center>
                    </div>
                </div>

                <ScrollAnimation animateIn="fadeIn" duration={1}>
                    <div className="col-12 aboutMe">
                        <div className="container-fluid">
                            <div className="presentation">
                                <h3>Sobre mim</h3>
                                <div className="row">
                                    <div className="col-md-3 col-sm-12">
                                        <img src={Author} alt="Kevin Uehara" className="rounded-circle photo_author" />
                                    </div>
                                    <div className="col-md-8 col-sm-12">
                                        <p className="simple-text"> Criador, desenvolvedor</p>
                                        <p className="simple-text">
                                            Vestibulum cursus eget eros ut euismod. Maecenas condimentum, ligula a tincidunt finibus,
                                            tortor massa tincidunt magna, ut porta tellus ante sit amet magna. Nam metus nunc, posuere
                                            eget justo ac, finibus commodo turpis. Nulla facilisi. Etiam et mollis orci. Proin eleifend
                                            enim lacus, quis varius felis commodo ut. Nam nec felis at nunc gravida lacinia. Curabitur
                                            non mattis lorem, a tristique mi. Quisque lectus lectus, hendrerit sed ipsum vitae, ullamcorper
                                            dictum felis. Nulla maximus, augue sed sodales convallis, velit arcu dictum leo, vel pellentesque
                                            magna purus non lectus. Vestibulum faucibus porta sagittis. Etiam tristique ante in est congue
                                            volutpat.
    
                                  </p>
                                    </div>
                                </div>
                            </div>


                            <div className="row separate-divs">
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-center">
                                                <h5 className="card-title align-self-center title-bold">Desenvolvedor Front-end</h5>
                                            </div>
                                            <center>
                                                <i className="fa fa-code icon-knowledge"></i>
                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                <div className="knowledges">
                                                    <h5 className="title-bold">Conhecimentos</h5>
                                                    <p>Javascript, ReactJS, HTML, CSS3</p>

                                                    <h5 className="title-bold">Frameworks e bibliotecas</h5>
                                                    <p>Bootstrap, MaterialUI, Jquery</p>
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="d-flex justify-content-center">
                                                <h5 className="card-title title-bold">Desenvolvedor Back-end</h5>
                                            </div>
                                            <center>
                                                <i className="fa fa-cogs icon-knowledge"></i>
                                                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                <div className="knowledges">
                                                    <h5 className="title-bold">Conhecimentos</h5>
                                                    <p>Java, NodeJS, GO, C#, PHP</p>

                                                    <h5 className="title-bold">Banco de dados</h5>
                                                    <p>Cassandra, ElasticSearch, PostgreSQL, SQLServer, MySQL</p>
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div style={parallax} className="parallaxImage">
                                <div className="parallax-overlay">
                                    <h1 className="text-name-parallax">Nam id pellentesque est</h1>
                                    <p className="text-description-parallax">Nulla in lorem fermentum, posuere sem eget, accumsan neque. In molestie magna id nibh ullamcorper, vitae tincidunt velit tempor.
                             In viverra ex id sapien faucibus</p>
                                </div>
                            </div>


                        </div>
                    </div>
                </ScrollAnimation>


            </div>

        );
    }
}

export default Home;