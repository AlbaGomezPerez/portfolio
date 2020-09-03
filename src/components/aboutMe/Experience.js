import React, {  } from 'react';
import { Col, Row, Progress, Timeline, Button } from 'antd';
import '../../styles/experience.css';

const Experience = () => {


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
            <p className="experiencie-title" id="experiencie-title">Mi experiencia</p>
            <Row className="experiencie-row">

                <Col className="experiencie-col" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 12 }}>
                        <div className="page__description__container experiencie-container">
                            <Timeline mode="alternate" className="timeline">
                                <Timeline.Item >
                                    <span className="experience-item" data-aos="experience-animation">Formación Angular</span>
                                    <p className="dates experience-item" data-aos="experience-animation">Mayo - Junio 2020.
                                        <br></br> Udemy</p>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <span className="experience-item" data-aos="experience-animation-left">Formación React</span>
                                    <p className="dates experience-item" data-aos="experience-animation-left">Marzo - Abril 2020.
                                        <br></br> Udemy</p>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <span className="experience-item" data-aos="experience-animation">Desarrollador Front-End</span>
                                    <p className="dates experience-item" data-aos="experience-animation">Enero - Febrero 2020.
                                        <br></br> Rentger</p>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <span className="experience-item" data-aos="experience-animation-left">Bootcamp desarrollo Front-End</span>
                                    <p className="dates experience-item" data-aos="experience-animation-left">Junio - Diciembre 2019.
                                        <br></br> Adalab Digital</p>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <span className="experience-item" data-aos="experience-animation">Director creativo</span>
                                    <p className="dates experience-item" data-aos="experience-animation">Diciembre 2016 - Junio 2019.
                                        <br></br> Complementos de moda</p>
                                </Timeline.Item>
                                <Timeline.Item>
                                    <span className="experience-item" data-aos="experience-animation-left">Grado en Diseño de Moda</span>
                                    <p className="dates experience-item" data-aos="experience-animation-left">Septiembre 2010 - Junio 2015.
                                        <br></br> Escuela Superior de Diseño</p>
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
