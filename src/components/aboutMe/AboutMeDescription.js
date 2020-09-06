import React from 'react';
import {
    Typography, Col, Row, Progress
} from 'antd';
import '../../styles/aboutMeDescription.css';
import alba from '../../images/alba.jpg';

/**
 * Component which render AboutMeDescription component
 */
const AboutMeDescription = () => {
    const { Title } = Typography;

    return (
        <div className="description__container">
            <Row>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 10 }}>
                    <Row>
                        <div className="page__description__container">
                            <Title className="page__title aboutMe-title" level={2}>Sobre mi</Title>
                            <span className="introduction-me">Mi nombre es Alba y soy desarrolladora Front-End</span>
                            <p className="description__list">
                                Estudié Diseño de Moda en Madrid. Desarrollé mi parte creativa y artística llegando
                                a fundar mi propia firma de complementos. Mi trabajo me encantaba,
                                pero necesitaba mayor estabilidad, por lo que decidí cambiar mi rumbo.
                            </p>
                            <p className="description__list" id="description__list">
                                En junio de 2019 comencé mi andadura en el mundo digital,
                                de la mano de Adalab. Me formé como desarrolladora Front-End,
                                adquiriendo conocimientos como HTML, CSS, javaScript, React, Angular...
                            </p>
                            <p className="description__list">
                                Mi experiencia profesional y personal han impulsado mi creatividad,
                                mi curiosad y la adaptación al cambio.
                            </p>
                        </div>
                    </Row>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 23, offset: 1 }} md={{ span: 24 }} lg={{ span: 22, offset: 2 }} xl={{ span: 13, offset: 1 }}>
                    <div className="col l6 profile-image-container" data-aos="alba-animation">
                        <img className="profile-image" src={alba} alt="profileAlba"/>
                    </div>
                    <div>
                        <p className="phrase">"Una persona que nunca cometió un error, nunca innovó"
                        </p>
                        <p className="phrase2">Aquí estoy yo, innovando y formándome en un nuevo marco profesional</p>
                    </div>

                </Col>

            </Row>
            <Progress
                className="description__line"
                strokeColor={{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                }}
                percent={100}
                showInfo={false}
                strokeWidth={2}
            />
        </div>
    );
};

export default AboutMeDescription;
