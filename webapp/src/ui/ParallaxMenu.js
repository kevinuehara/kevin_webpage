import React from 'react';
import Background from '../images/background1.jpg';

const ParallaxMenu = ({InitScroll, intlz}) => {

    var background = {
        backgroundImage: "url(" + Background + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: "fixed",
        height: "100vh"
    };

    return(<div>
        <div style={background} className="backgroundImage home">
                    <div className="background-overlay">
                        <h1 className="text-name-background">Kevin Uehara</h1>
                        <p className="text-description-background">{intlz.get('initScreen.title')}</p>
                        <center>
                            <i className="fa fa-caret-square-o-down icon-background" onClick={InitScroll}></i>
                        </center>
                    </div>
                </div>
    </div>);
};

export default ParallaxMenu;