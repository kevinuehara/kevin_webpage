import React from 'react';
import '../css/Footer.css';

const Footer = () => {
    return (<div>
        <hr />
        <div className="content-footer">
            <center className="move-footer">
            <div className="icons">
                <a href="https://www.facebook.com/kevin.uehara.1" className="link-icon"><i className="fa fa-facebook-square icon-social-media"></i></a>
                <a href="https://www.instagram.com/uehara_kevin" className="link-icon"><i className="fa fa-instagram icon-social-media"></i></a>
                <a href="https://github.com/kevinuehara" className="link-icon"><i className="fa fa-github-square icon-social-media"></i></a>
                <a href="https://www.linkedin.com/in/kevin-uehara" className="link-icon"><i className="fa fa-linkedin icon-social-media"></i></a>
            </div>
                <span className="author-footer">Kevin Uehara 2019</span>
            </center>

        </div>
    </div>);
};

export default Footer;