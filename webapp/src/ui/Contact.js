import React from 'react';

const Contact = ({parallaxSrc, intlz, ScrollAnimation}) => {

    var parallax = {
        backgroundImage: "url(" + parallaxSrc + ")",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: "fixed",
        height: "40vh"
    }


    return(<div>
        <hr/>
        <ScrollAnimation animateIn="fadeIn" duration={1}>
            <div className="contact separate-divs spacing-box">
                <h3>{intlz.get('navbar.contact')}</h3>
            </div>
        </ScrollAnimation>

        <div style={parallax} className="parallaxImage">
            <div className="parallax-overlay">
                <h1 className="text-name-parallax">Nam id pellentesque est</h1>
                <p className="text-description-parallax">Nulla in lorem fermentum, posuere sem eget, accumsan neque. In molestie magna id nibh ullamcorper, vitae tincidunt velit tempor.
                In viverra ex id sapien faucibus</p>
            </div>
        </div>
    </div>);
};

export default Contact;