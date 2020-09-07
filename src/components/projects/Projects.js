import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Card, Col, Progress, Row, Tooltip, Typography} from 'antd';
import '../../styles/projects.css';
import {Link} from 'react-router-dom';
import alba from '../../images/alba.jpg';
import {getReadme} from '../../services/readmeProjects';

/**
 * Component which render a list with all projects
 * @param props that contains projects, images projects and readmes projects.
 */
function Projects(props) {
    const { Meta } = Card;
    const { Title } = Typography;
    const { allProjects, allImages, allReadmes } = props;

    return (
        <React.Fragment>
            <Progress
                className="description__line"
                strokeColor={{
                    '0%': '#e9b870',
                    '100%': '#d07521',
                }}
                percent={100}
                showInfo={false}
                strokeWidth={2}
            />
            <div className="employeeStatus__container" id="projects">
                <Row>
                    <Col xs={{span: 24}} sm={{span: 24}} md={{span: 24}} lg={{span: 24}} xl={{span: 10}}>
                        <Row>
                            <div className="page__description__container">
                                <Title className="page__title" level={2}>Proyectos</Title>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
            <Row className="allCards">
                {allProjects.map((project, index) => {
                    return (
                        // eslint-disable-next-line react/no-array-index-key
                        <Col className="cards-container" id={`project--${index}`} key={index} xs={{span: 24}}
                             sm={{span: 24}} md={{span: 24}} lg={{span: 24}}>
                            <div className="card-container" id={`project${project.id}`}>
                                <Link className="CardLink" to={"/project/" + project.id}>
                                    <Card
                                        className={`item individual-card card-${index}`}
                                        data-aos={`project--animation${index}`}
                                        cover={
                                            <img
                                                className={`project-image project-image${index}`}
                                                alt="example"
                                                src={allImages.find(image => image.includes(project.name))}
                                            />
                                        }
                                        actions={[]}
                                    >
                                        <div className="">
                                            <Meta
                                                className="caption"
                                                avatar={<Avatar src={alba}/>}
                                                title={getReadme(project.name, allReadmes)}

                                                description={
                                                    <div className="allTopics">
                                                        {project.topics.map(topic => {
                                                            return (
                                                                <Tooltip title={topic} key={topic}>
                                                                    <p alt={topic}
                                                                       className={`projectTopics project-${topic}`}></p>
                                                                </Tooltip>
                                                            )
                                                        })}
                                                    </div>
                                                }
                                            />
                                        </div>
                                    </Card>
                                </Link>
                            </div>
                        </Col>
                    )
                })}
            </Row>
        </React.Fragment>
    )
};

Projects.propTypes = {
    allProjects: PropTypes.array,
    allImages: PropTypes.array,
    allReadmes: PropTypes.array
};


export default Projects;
