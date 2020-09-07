
import React from 'react';
import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import 'aos/dist/aos.css';
import '../../styles/projectDetail.css';
import {
    Row, Col, Typography, Tooltip
} from 'antd';
import { getReadme } from '../../services/readmeProjects';


/**
 * Component which render a detail page project
 * @param props that contains projects, images projects and readmes projects and match.
 */
const ProjectDetail = (props) => {
    // eslint-disable-next-line react/prop-types
    const { allProjects, Match, allImages, allReadmes } = props;
    // eslint-disable-next-line react/prop-types,radix
    const projectId = parseInt(Match.params.id);
    const { Title } = Typography;
    const project = allProjects.find(myProject => myProject.id === projectId);

    if (project) {
        return (
            <div className="projectDetail">
                <Col className="details" sm={{span: 24}} md={{span: 6, offset: 4}} lg={{span: 24}}>
                    <Row className="detailsImage">
                        <div className="image-project-container">
                            <div className="headerProject">
                            <Link to={`/#project${projectId}`}>
                                <div className="backContainer">
                                    <p className="backText">
                                        <i className="material-icons">keyboard_backspace</i>
                                    </p>
                                </div>
                            </Link>
                            <Title className="page__title detailTitle" level={2}>
                                {getReadme(project.name, allReadmes)}
                            </Title>
                            </div>
                            <div className="imageContainer" data-aos="image-container">
                                <img
                                    className="imageProjectDetail"
                                    alt="project"
                                    src={allImages.find(image => image.includes(project.name))}
                                />
                            </div>
                        </div>
                        <div className="projectsDetails">
                            <div className="aboutProjectSection">
                                <Col>
                                    <div>
                                        <div className="logoContainer goal icons__circle"></div>
                                        <div className="profile">
                                            <p className="goalTitle">El reto </p>
                                            <p className="profileText">{project.description}</p>
                                        </div>
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <div className="logoContainer web icons__circle"></div>
                                        <div className="profile">
                                            <p className="goalTitle">Herramientas</p>
                                            <div className="topicsContainer">
                                            {project.topics.map((topic) => (
                                                <Tooltip title={topic} key={topic}>
                                                    <div className={`topics ${topic}`} alt={topic}></div>
                                                </Tooltip>
                                            ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="logoContainer tools icons__circle"></div>
                                        <div className="profile">
                                            <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                                                <p className="goalTitle">Visita la web</p>
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

