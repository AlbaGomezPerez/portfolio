
import React, {  } from 'react';

import { Card, Avatar, Row, Col, Typography } from 'antd';
import '../../styles/proyects.css';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import PropTypes from 'prop-types';
import alba from '../../images/alba.jpg';
import { getReadme } from '../../services/readmeProjects';

function Projects(props) {
    const { Meta } = Card;
    const { Title } = Typography;
    const { allProjects, allImages, allReadmes } = props;

    AOS.init({
        duration: 1200,
    });

    return (
        <React.Fragment>

            <div className="employeeStatus__container">
                <Row>
                    <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }} xl={{ span: 10 }}>
                        <Row>
                            <div className="page__description__container">
                                <Title className="page__title" level={2}>Proyectos</Title>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
            <Row className="allCards">
            {allProjects.map((proyect, index) => {
                return (
                    // eslint-disable-next-line react/no-array-index-key
                    <Col className="cards-container" id={`proyect--${index}`} key={index} xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                        <Link className="CardLink" to={"/project/" + proyect.id}>
                            <div className="card-container">
                        <Card
                        className={`item individual-card card-${index}`}
                        data-aos={`proyect--animation${index}`}
                        cover={
                                <img
                                    className={`proyect-image proyect-image${index}`}
                                    alt="example"
                                    src={allImages.find(image => image.includes(proyect.name))}
                                />

                        }
                        actions={[
                        ]}
                    >
                        <Meta
                            className="caption"
                            avatar={<Avatar src={alba} />}
                            title={getReadme(proyect.name, allReadmes)}
                        />
                    </Card>

                            </div>

                        </Link>
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