import React from 'react';
import '../styles/contact.css';
import { Typography, Col, Row } from 'antd';


function Contact() {
    const { Title } = Typography;

    return (
        <React.Fragment>
                    <Col className="contact" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 6, offset: 4 }} lg={{ span: 20 }} xl={{ span: 20 }} >
                        <Row className="contact-row">
                        <div className="contact__container">
                            <Title className="page__title contact-title" level={2}>Contacto</Title>
                            <p className="contact-description">
                                Si crees que puedo ser la persona adecuada para tu próximo proyecto no dudes en ponerte en contacto conmigo.
                                <br></br>
                                Te espero en mis redes sociales.
                            </p>
                        </div>
                        <div className="contact-icons">
                            <div className="network__section">
                                <a href="https://twitter.com/GomezPerezAlba" target="_blank" rel="noopener noreferrer">
                                    <div className="logo">
                                        <div className="logo-container twitter icons__circle"></div>
                                        <div className="profile">
                                           <span className="profile-text">@GomezPerezAlba</span> </div>
                                    </div>
                                </a>
                                <a href="https://www.linkedin.com/in/albagomezperez/" target="_blank" rel="noopener noreferrer">
                                    <div className="logo">
                                        <div className="logo-container linkedin icons__circle"></div>
                                        <div className="profile">
                                            <span className="profile-text">albagomezperez</span> </div>
                                    </div>
                                </a>

                                <a href="https://github.com/AlbaGomezPerez" target="_blank" rel="noopener noreferrer">
                                    <div className="logo">
                                        <div className="logo-container github icons__circle"></div>
                                        <div className="profile">
                                            <span className="profile-text">AlbaGomezPerez</span> </div>
                                    </div>
                                </a>

                                <div className="logo">
                                    <div className="logo-container email icons__circle"></div>
                                    <div className="profile">
                                        <span className="profile-text">albagope@gmail.com</span> </div>
                                </div>

                            </div>
                        </div>
                        </Row>
                    </Col>

        </React.Fragment>
    )
};


export default Contact;
