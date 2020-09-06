import React from 'react';
import { Col, Row } from 'antd';
import SkillsProgress from './SkillsProgress';

/**
 * Component which render SkillsProgress component
 */
const AboutMeSkills = () => {
    return (
        <div className="skillsContainer">
            <Row>
                <p>Mis habilidades</p>
                <span className="skillsDescription">El equilibrio adecuado entre mis habilidades técnicas y personales es la clave para el desarrollo de mis proyectos</span>
                <Col>
                    <SkillsProgress />
                </Col>
            </Row>
        </div>
    );
};

export default AboutMeSkills;
