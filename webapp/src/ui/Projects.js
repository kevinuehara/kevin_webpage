import React from 'react';

const Projects = ({srcImage, ScrollAnimation, intlz}) => {
    return (
        <div>
            <hr />
            <ScrollAnimation animateIn="fadeIn" duration={1}>
                <div className="projects separate-divs spacing-box">
                    <h3>{intlz.get('navbar.projects')} </h3>
                </div>
            </ScrollAnimation>

            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <ScrollAnimation animateIn="bounceInLeft" duration={1}>
                        <div className="offset-md-1 offset-sm-0">
                            <img src={srcImage} className="rednear-img" alt="Rednear" />
                        </div>
                    </ScrollAnimation>
                </div>

                <div className="col-md-6 col-sm-12">
                    <ScrollAnimation animateIn="bounceInRight" duration={1}>
                        <div className="rednear-presentation">
                            <h3>Rednear</h3>
                            <p>Vivamus ac nisl purus. Maecenas convallis volutpat lacinia. Sed scelerisque in dui at gravida.
                                Suspendisse ut est risus. Vestibulum sed magna lacus. Ut ut augue eget tellus porttitor viverra sit
                                amet a eros. Vivamus efficitur, nisi eu aliquam vulputate, nunc leo dictum nibh, eu eleifend tellus neque eu ipsum.
                                Nullam malesuada, lectus ac sodales viverra, diam elit varius eros, id tempor tellus ligula ac diam. In ac felis dui.
                                </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
            
            <div className="row separate-divs spacing-box">
                <div className="col-md-6 col-sm-12">
                    <ScrollAnimation animateIn="bounceInLeft" duration={1}>
                    <div className="offset-md-1 offset-sm-0">
                            <h3>Github</h3>
                            <p>Vivamus ac nisl purus. Maecenas convallis volutpat lacinia. Sed scelerisque in dui at gravida.
                                Suspendisse ut est risus. Vestibulum sed magna lacus. Ut ut augue eget tellus porttitor viverra sit
                                amet a eros. Vivamus efficitur, nisi eu aliquam vulputate, nunc leo dictum nibh, eu eleifend tellus neque eu ipsum.
                                Nullam malesuada, lectus ac sodales viverra, diam elit varius eros, id tempor tellus ligula ac diam. In ac felis dui.
                                </p>
                        </div>
                    </ScrollAnimation>
                </div>

                <div className="col-md-6 col-sm-12">
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