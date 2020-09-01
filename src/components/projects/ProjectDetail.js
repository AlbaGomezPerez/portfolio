
import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import '../../styles/projectDetail.css';
import {Row, Col, Typography, Tag} from 'antd';
import { getReadme } from '../../services/readmeProjects';
import PropTypes from "prop-types";

const ProjectDetail = (props) => {
    // eslint-disable-next-line react/prop-types
    const { allProjects, Match, allImages, allReadmes } = props;
    // eslint-disable-next-line react/prop-types,radix
    const projectId = parseInt(Match.params.id);
    const { Title } = Typography;

    AOS.init({
        duration: 1200,
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        mirror: true,
    });

    const project = allProjects.find(myProject => myProject.id === projectId);

    const iconsTools = () => {
        const elemento = document.querySelector('.details');
    };

    useEffect(() => {
        iconsTools();
    }, []);

    if (project) {
        return (
            <div className="projectDetail">
                <Col className="details" sm={{span: 24}} md={{span: 6, offset: 4}} lg={{span: 24}}>
                    <Row className="details-image">
                        <div className="image-project-container">
                            <div className="header-project">
                            <Link to={`/aboutMe#project${projectId}`}>
                                <div className="backContainer">
                                    <p className="backText">
                                        <i className="material-icons">keyboard_backspace</i>
                                    </p>
                                </div>
                            </Link>
                            <Title className="page__title contact-title" level={2}>
                                {getReadme(project.name, allReadmes)}
                            </Title>
                            </div>
                            <div className="image-container" data-aos="image-container">
                                <img
                                    className="image-project-detail"
                                    alt="example"
                                    src={allImages.find(image => image.includes(project.name))}
                                />
                            </div>
                        </div>
                        <div className="projects-details">
                            <div className="aboutProject__section">
                                <Col className="colf">
                                    <div className="logo">
                                        <div className="logo-container goal icons__circle"></div>
                                        <div className="profile">
                                            <p className="goal-title">El reto </p>
                                            <p className="profile-text">{project.description}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col className="cols">
                                    <div className="logo">
                                        <div className="logo-container web icons__circle"></div>
                                        <div className="profile">
                                            <p className="goal-title">Herramientas</p>
                                            <div className="topics-container">
                                            {project.topics.map((topic, index) => (
                                                <div className={`topics ${topic}`} key={index}></div>
                                            ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="logo">
                                        <div className="logo-container tools icons__circle"></div>
                                        <div className="profile">
                                            <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                                                <p className="goal-title">Visita la web</p>
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                            </div>
                        </div>
                    </Row>
                </Col>
            </div>
        );
    } else {
        return ""
    }
};

ProjectDetail.propTypes = {
    allProjects: PropTypes.array,
    Match: PropTypes.object,
    allImages: PropTypes.array,
    allReadmes: PropTypes.array
};

export default ProjectDetail;

