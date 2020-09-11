
import React, {useEffect} from 'react';
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

    useEffect(() => {
        scrollUp()
    });

    const scrollUp = () => {
        console.log('el scroll');
        window.scrollTo(0, 0);
    };


    // eslint-disable-next-line react/prop-types
    const { allProjects, Match, allImages, allReadmes } = props;
    // eslint-disable-next-line react/prop-types,radix
    const projectId = parseInt(Match.params.id);
    const { Title } = Typography;
    const project = allProjects.find(myProject => myProject.id === projectId);


    if (project) {
        return (
            <div className="projectDetail" id="projectDetail">
                <Col className="details" sm={{span: 24}} md={{span: 6, offset: 4}} lg={{span: 24}}>
                    <Row className="details-image">
                        <div className="image-project-container">
                            <div className="header-project">
                                <Link to={`/#project${projectId}`}>
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
                                                {project.topics.map((topic) => (
                                                    <Tooltip title={topic} key={topic}>
                                                        <div className={`topics ${topic}`} alt={topic}></div>
                                                    </Tooltip>
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
                                    <div className="up">
                                        <i onClick={scrollUp} className="material-icons upIcon">arrow_drop_up</i>
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

