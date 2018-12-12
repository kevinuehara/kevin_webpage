import React from 'react';

const Presentation = ({imgAuthor, ScrollAnimation, intlz}) => {
    return(<div>
<ScrollAnimation animateIn="fadeIn" duration={1}>
                            <div className="presentation aboutMe">
                                <h3 className="title">{intlz.get('navbar.aboutme')}</h3>
                                <div className="row spacing-box">
                                    <div className="col-md-3 col-sm-12">
                                        <img src={imgAuthor} alt="Kevin Uehara" className="rounded-circle photo_author" />
                                    </div>
                                    <div className="col-md-8 col-sm-12">
                                        <p className="simple-text"> Criador, desenvolvedor</p>
                                        <p className="simple-text">
                                            Vestibulum cursus eget eros ut euismod. Maecenas condimentum, ligula a tincidunt finibus,
                                            tortor massa tincidunt magna, ut porta tellus ante sit amet magna. Nam metus nunc, posuere
                                            eget justo ac, finibus commodo turpis. Nulla facilisi. Etiam et mollis orci. Proin eleifend
                                            enim lacus, quis varius felis commodo ut. Nam nec felis at nunc gravida lacinia. Curabitur
                                            non mattis lorem, a tristique mi. Quisque lectus lectus, hendrerit sed ipsum vitae, ullamcorper
                                            dictum felis. Nulla maximus, augue sed sodales convallis, velit arcu dictum leo, vel pellentesque
                                            magna purus non lectus. Vestibulum faucibus porta sagittis. Etiam tristique ante in est congue
                                            volutpat.

                                  </p>
                                    </div>
                                </div>

                                <div className="row separate-divs">
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-center">
                                                    <h5 className="card-title align-self-center title-bold">{intlz.get('knowledge.frontend')}</h5>
                                                </div>
                                                <center>
                                                    <i className="fa fa-code icon-knowledge"></i>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                                                    <div className="knowledges">
                                                        <h5 className="title-bold">{intlz.get('knowledge.acquirements')}</h5>
                                                        <p>Javascript, ReactJS, HTML, CSS3</p>

                                                        <h5 className="title-bold">{intlz.get('knowledge.others')}</h5>
                                                        <p>Bootstrap, MaterialUI, Jquery</p>
                                                    </div>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-center">
                                                    <h5 className="card-title title-bold">{intlz.get('knowledge.backend')}</h5>
                                                </div>
                                                <center>
                                                    <i className="fa fa-cogs icon-knowledge"></i>
                                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                                    <div className="knowledges">
                                                        <h5 className="title-bold">{intlz.get('knowledge.acquirements')}</h5>
                                                        <p>Java, NodeJS, GO, C#, PHP</p>

                                                        <h5 className="title-bold">{intlz.get('knowledge.database')}</h5>
                                                        <p>Cassandra, ElasticSearch, PostgreSQL, SQLServer, MySQL</p>
                                                    </div>
                                                </center>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </ScrollAnimation>
    </div>);
};

export default Presentation;