import React from 'react';
import '../css/Navbar.css';

const Navbar = ({onClickAboutMe}) => {
    return (<div>
        <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-dark  navBackground">
            <a className="navbar-brand" href="http://localhost:3000">Kevin Uehara</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarItems" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarItems">
                <div className="navbar-nav">
                    <span className="nav-hover navbar-text" data-target="#navbarItems" aria-expanded="false" data-toggle="collapse" onClick={onClickAboutMe}>Sobre mim </span>
                    <span className="nav-hover navbar-text" data-target="#navbarItems" aria-expanded="false" data-toggle="collapse" onClick={onClickAboutMe}>Projetos</span>
                    <span className="nav-hover navbar-text" data-target="#navbarItems"  aria-expanded="false" data-toggle="collapse" onClick={onClickAboutMe}>Contato</span>
                </div>
            </div>
        </nav>
    </div>);
};

export default Navbar;