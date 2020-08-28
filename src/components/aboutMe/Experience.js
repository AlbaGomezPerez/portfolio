import React, {  } from 'react';
import { Col, Row, Progress, Timeline, Button } from 'antd';
import '../../styles/experience.css';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles



const Experience = () => {
    AOS.init({
        duration: 3000,
    });

    return (
        <div className="employeeStatus__container">
            <Progress
                className="experiencie-line"
                strokeColor={{
                    '0%': '#996d75',
                    '100%': '#ebc0b5',
                }}
                percent={100}
                showInfo={false}
                strokeWidth={2}
            />
            <p className="experiencie-title">Mi experiencia</p>
            <Row className="experiencie-row">

                <Col className="experiencie-col" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 12 }}>
                        <div className="page__description__container experiencie-container">
                            <Timeline mode="alternate" className="timeline">
                                <Timeline.Item >
                                    <span className="experience-item" data-aos="experience-animation">Formación Angular</span>
                                    <p className="dates experience-item" data-aos="experience-animation">Abril 2020. Udemy</p>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <span className="experience-item" data-aos="experience-animation-left">Formación React</span>
                                    <p className="dates experience-item" data-aos="experience-animation-left">Marzo 2020. Udemy</p>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <span className="experience-item" data-aos="experience-animation">Desarrollador Front-End</span>
                                    <p className="dates experience-item" data-aos="experience-animation">Enero 2020. Rentger</p>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <span className="experience-item" data-aos="experience-animation-left">Bootcamp desarrollo Front-End</span>
                                    <p className="dates experience-item" data-aos="experience-animation-left">Octubre 2019. Adalab Digital</p>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <span className="experience-item" data-aos="experience-animation">Director creativo</span>
                                    <p className="dates experience-item" data-aos="experience-animation">Junio 2019. Complementos de moda</p>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <span className="experience-item" data-aos="experience-animation-left">Grado en Diseño de Moda</span>
                                    <p className="dates experience-item" data-aos="experience-animation-left">Junio 2015. Escuela Superior de Diseño</p>
                                </Timeline.Item>
                            </Timeline>
                        </div>
                </Col>
            </Row>
            <Row>
                <Col className="curriculum-space" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                    <a href="./AlbaGomezPerez.pdf" target="_blank" className="curriculum-link">
                        <Button className="curriculum-button">
                            Curriculum
                        </Button>
                    </a>

                </Col>
            </Row>
        </div>
    );
};

export default Experience;
