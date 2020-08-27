import React from 'react';
import { Col, Row } from 'antd';
import SkillsProgress from './SkillsProgress';

const AboutMeSkills = () => {
  return (
    <div className="generalStatus__container">
      <Row className="generalStatus__container">
        <p className="results__title" >Mis habilidades </p>
          <span className="skills-description">El equilibrio adecuado entre mis habilidades técnicas y personales es la clave para el desarrollo de mis proyectos</span>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 17, offset: 4 }}>
          <SkillsProgress />
        </Col>
      </Row>
    </div>
  );
};

export default AboutMeSkills;
