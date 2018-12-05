import React, { Component } from 'react';
import '../css/Home.css';
import Background from '../images/background3.jpg';

class Home extends Component {

    constructor(props) {
        super(props);
        // this.state = {

        // };
    }

    render() {

        var background = {
            backgroundImage: "url(" + Background + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: "100vh"
        };
        return (

            <div>
                <div style={background} className="backgroundImage">
                    <div className="background-overlay">
                        <h1 className="text-name-background">Kevin Uehara</h1>
                        <p className="text-description-background">Desenvolvedor, criador e apaixonado pela inovação</p>
                        <center>
                            <i className="fa fa-caret-square-o-down icon-background"></i>
                        </center>
                    </div>
                </div>
            </div>

        );
    }
}

export default Home;