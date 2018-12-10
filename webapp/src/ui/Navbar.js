import React from 'react';
import '../css/Navbar.css';

const Navbar = ({ intlz, onClickAboutMe, onClickHome, changePort, changeEng }) => {
    return (<div>
        <nav id="navbar" className="navbar fixed-top navbar-expand-lg navbar-dark  navBackground">
            <a className="navbar-brand" href="http://localhost:3000">Kevin Uehara</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarItems" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarItems">
                <div className="navbar-nav">
                    <span className="nav-hover navbar-text" data-target="#navbarItems" aria-expanded="false" data-toggle="collapse" onClick={onClickHome}>{intlz.get('navbar.home')}</span>
                    <span className="nav-hover navbar-text" data-target="#navbarItems" aria-expanded="false" data-toggle="collapse" onClick={onClickAboutMe}>{intlz.get('navbar.aboutme')}</span>
                    <span className="nav-hover navbar-text" data-target="#navbarItems" aria-expanded="false" data-toggle="collapse" onClick={onClickAboutMe}>{intlz.get('navbar.projects')} </span>
                    <span className="nav-hover navbar-text" data-target="#navbarItems" aria-expanded="false" data-toggle="collapse" onClick={onClickAboutMe}>{intlz.get('navbar.contact')} </span>
                    <li className="nav-item dropdown">
                        <span className="nav-link dropdown-toggle lang-label-dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {intlz.get('navbar.lang')}
                        </span>
                        <div id="navDropDown" className="dropdown-menu language" aria-labelledby="navbarDropdownMenuLink">
                            <span className="nav-hover navbar-text" data-target="#navbarItems" aria-expanded="false" data-toggle="collapse" onClick={changePort}>pt-BR</span>
                            <span className="nav-hover navbar-text" data-target="#navbarItems" aria-expanded="false" data-toggle="collapse" onClick={changeEng}>en-US</span>
                        </div>
                    </li>
                </div>
            </div>
        </nav>
    </div>);
};

export default Navbar;