import React from 'react';
import '../css/Navbar.css';

const Navbar = () => {
    return (<div>
        <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-dark  navBackground">
            <a className="navbar-brand" href="#">Kevin Uehara</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link active" href="#">Sobre mim <span className="sr-only">(current)</span></a>
                    <a className="nav-item nav-link" href="#">Projetos</a>
                    <a className="nav-item nav-link" href="#">Contato</a>
                </div>
            </div>
        </nav>
    </div>);
};

export default Navbar;