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
                <h1 className="text-name-parallax">{intlz.get('contact.title')}</h1>
                <p className="text-description-parallax">{intlz.get('contact.description')}</p>
                <p className="text-email-parallax">email: uehara.kevin@gmail.com</p>
            </div>
        </div>
    </div>);
};

export default Contact;