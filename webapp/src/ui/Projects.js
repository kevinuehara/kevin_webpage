import React from 'react';

const Projects = ({srcImageKevin, srcImageDojot, ScrollAnimation, intlz}) => {
    return (
        <div>
            <hr />
            <ScrollAnimation animateIn="fadeIn" duration={1}>
                <div className="projects separate-divs spacing-box">
                    <h3>{intlz.get('navbar.projects')} </h3>
                </div>
            </ScrollAnimation>

            <div className="row separate-divs spacing-box">
                <div className="col-md-7 col-sm-12">
                    <ScrollAnimation animateIn="bounceInLeft" duration={1}>
                    <div className="offset-md-1 offset-sm-0">
                            <h3>Dojot</h3>
                            <p>{intlz.get('dojot-description')}</p>
                            <p><a className="link" href="http://www.dojot.com.br/">{intlz.get('dojot-link')}</a></p>
                        </div>
                    </ScrollAnimation>
                </div>

                <div className="col-md-5 col-sm-12">
                    <ScrollAnimation animateIn="bounceInRight" duration={1}>
                         <div className="offset-md-4 offset-sm-1">
                            <img src={srcImageDojot} className="dojot-img" alt="Dojot" />
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

            <div className="row">
                <div className="col-md-5 col-sm-12">
                    <ScrollAnimation animateIn="bounceInLeft" duration={1}>
                        <div className="offset-md-1 offset-sm-0">
                            <img src={srcImageKevin} className="rednear-img" alt="Rednear" />
                        </div>
                    </ScrollAnimation>
                </div>

                <div className="col-md-6 col-sm-12">
                    <ScrollAnimation animateIn="bounceInRight" duration={1}>
                        <div className="rednear-presentation">
                            <h3>Rednear</h3>
                            <p>{intlz.get('rednear-description')}</p>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
            
            <div className="row separate-divs spacing-box">
                <div className="col-md-7 col-sm-12">
                    <ScrollAnimation animateIn="bounceInLeft" duration={1}>
                    <div className="offset-md-1 offset-sm-0">
                            <h3>Github</h3>
                            <p>{intlz.get('github-description')}</p>
                            <p><a className="link" href="https://github.com/kevinuehara">{intlz.get('github-link')}</a></p>
                        </div>
                    </ScrollAnimation>
                </div>

                <div className="col-md-5 col-sm-12">
                    <ScrollAnimation animateIn="bounceInRight" duration={1}>
                        <div className="offset-md-5 offset-sm-0">
                            <i className="fa fa-github github-icon"></i>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    );
};

export default Projects;