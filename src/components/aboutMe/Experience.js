import React from 'react';
import {
    Button, Col, Progress, Row, Timeline
} from 'antd';
import '../../styles/experience.css';

/**
 * Component which render Experience component
 */
const Experience = () => {
    return (
        <div>
            <Progress
                className="experienceLine"
                strokeColor={{
                    '0%': '#996d75',
                    '100%': '#ebc0b5',
                }}
                percent={100}
                showInfo={false}
                strokeWidth={2}
            />
            <p className="experienceTitle" id="experienceTitle">Mi experiencia</p>
            <Row className="experienceRow">
                <Col
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 24 }}
                    lg={{ span: 24 }}
                     xl={{ span: 12 }}>
                    <div className="experienceContainer">
                        <Timeline mode="alternate" className="timeline">
                            <Timeline.Item>
                                <span className="experienceItem"
                                      data-aos="experienceAnimation">Formación Angular</span>
                                <p className="dates experienceItem" data-aos="experienceAnimation">Mayo - Junio 2020.
                                    <br></br> Udemy</p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <span className="experienceItem"
                                      data-aos="experienceAnimationLeft">Formación React</span>
                                <p className="dates experienceItem" data-aos="experienceAnimationLeft">Marzo - Abril
                                    2020.
                                    <br></br> Udemy</p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <span className="experienceItem" data-aos="experienceAnimation">Desarrollador Front-End</span>
                                <p className="dates experienceItem" data-aos="experienceAnimation">Enero - Febrero
                                    2020.
                                    <br></br> Rentger</p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <span className="experienceItem" data-aos="experienceAnimationLeft">Bootcamp desarrollo Front-End</span>
                                <p className="dates experienceItem" data-aos="experienceAnimationLeft">Junio -
                                    Diciembre 2019.
                                    <br></br> Adalab Digital</p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <span className="experienceItem"
                                      data-aos="experienceAnimation">Director creativo</span>
                                <p className="dates experienceItem" data-aos="experienceAnimation">Diciembre 2016 -
                                    Junio 2019.
                                    <br></br> Complementos de moda</p>
                            </Timeline.Item>
                            <Timeline.Item>
                                <span className="experienceItem" data-aos="experienceAnimationLeft">Grado en Diseño de Moda</span>
                                <p className="dates experienceItem" data-aos="experienceAnimationLeft">Septiembre
                                    2010 - Junio 2015.
                                    <br></br> Escuela Superior de Diseño</p>
                            </Timeline.Item>
                        </Timeline>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col
                    className="curriculumSpace"
                    xs={{ span: 24 }}
                    sm={{ span: 24 }}
                    md={{ span: 24 }}
                    lg={{ span: 24 }}>
                        <a href="./AlbaGomezPerez.pdf" target="_blank" className="curriculumLink">
                            <Button className="curriculumButton">
                                Curriculum
                            </Button>
                        </a>
                </Col>
            </Row>
        </div>
    );
};

export default Experience;
