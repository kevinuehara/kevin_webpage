import React from 'react';

const Presentation = ({ imgAuthor, ScrollAnimation, intlz }) => {
    return (<div>
        <ScrollAnimation animateIn="fadeIn" duration={1}>
            <div className="presentation aboutMe">
                <h3 className="title">{intlz.get('navbar.aboutme')}</h3>
                <div className="row spacing-box">
                    <div className="col-md-3 offset-md-0 col-sm-7 offset-sm-3 offset-2 spacing-box">
                        <img src={imgAuthor} alt="Kevin Uehara" className="rounded-circle photo_author" />
                    </div>
                    <div className="col-md-8 col-sm-12">
                        <p className="simple-text">{intlz.get('presentation.title')}</p>
                        <p className="simple-text">
                            {intlz.get('presentation.description_ph1')}<br />
                            {intlz.get('presentation.description_ph2')}<br /><br />
                            {intlz.get('presentation.description_ph3')}<br />
                            {intlz.get('presentation.description_ph4')}<br />
                            {intlz.get('presentation.description_ph5')}<br /><br />

                            <ul>
                                <li>{intlz.get('presentation.description_ph6')}</li>
                                <li>{intlz.get('presentation.description_ph7')}</li>
                            </ul>
                        </p>
                        <p className="phrase">"{intlz.get('presentation.phrase')}"</p>
                        <p className="phrase-author">-Vicent van Gogh</p>
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
                                    <p className="card-text">{intlz.get('knowledge.description-frontend')}</p>

                                    <div className="knowledges">
                                        <h5 className="title-bold">{intlz.get('knowledge.acquirements')}</h5>
                                        <p>Javascript, Typescript, AngularJS, ReactJS</p>

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
                                    <p className="card-text">{intlz.get('knowledge.description-backend')}</p>
                                    <div className="knowledges">
                                        <h5 className="title-bold">{intlz.get('knowledge.acquirements')}</h5>
                                        <p>Java, NodeJS, Python, GO</p>

                                        <h5 className="title-bold">{intlz.get('knowledge.database')}</h5>
                                        <p>Cassandra, Redis, MongoDB, ElasticSearch, PostgreSQL, SQLServer, MySQL</p>

                                        <h5 className="title-bold">Mobile</h5>
                                        <p>React Native</p>

                                        <h5 className="title-bold">{intlz.get('knowledge.another')}</h5>
                                        <p>Apache Spark, Apache Kafka, Firebase Plataform</p>
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