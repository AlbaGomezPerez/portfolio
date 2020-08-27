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
            <p className="experiencie-title" >Mi experiencia</p>
            <Row className="experiencie-row">

                <Col className="experiencie-col" xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 12 }}>
                        <div className="page__description__container experiencie-container">
                            <Timeline mode="alternate" className="timeline">
                                <Timeline.Item>Formación Angular
                                    <p className="dates">Abril 2020. Udemy</p>
                                </Timeline.Item>
                                <Timeline.Item>Formación React
                                    <p className="dates">Marzo 2020. Udemy</p>
                                </Timeline.Item>
                                <Timeline.Item>Desarrollador Front-End
                                    <p className="dates">Enero 2020. Rentger</p>
                                </Timeline.Item>
                                <Timeline.Item>Bootcamp desarrollo Front-End
                                    <p className="dates">Octubre 2019. Adalab Digital</p>
                                </Timeline.Item>
                                <Timeline.Item>Director creativo
                                    <p className="dates">Junio 2019. Complementos de moda</p>
                                </Timeline.Item>
                                <Timeline.Item>Grado en Diseño de Moda
                                    <p className="dates">Junio 2015. Escuela Superior de Diseño</p>
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
