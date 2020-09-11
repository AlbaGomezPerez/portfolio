import React from 'react';
import '../styles/main.css';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router';
import ProjectDetail from './projects/ProjectDetail';
import AboutMe from './aboutMe/AboutMe';
import Landing from './Landing';

/**
 * Component father which render Projects, AboutMe and Contact components
 * or change to projectDetail component
 * @param props that contains projects, images projects and readmes projects.
 */
function Main(props) {
    const { allProjects, allImages, allReadmes } = props;

    return (

        <Switch>
            <Route
                exact
                path="/project/:id"
                render={routerProps => (
                    <div style={{overflow: 'hidden'}}>
                        <ProjectDetail
                            Match={routerProps.match}
                            allProjects={allProjects}
                            allImages={allImages}
                            allReadmes={allReadmes}
                        />
                    </div>
                )}
            />
            <Route
                path="/"
                render={routerProps => (
                    <React.Fragment>
                        <Landing/>
                        <div className="main">
                            <AboutMe
                                allProjects={allProjects}
                                allImages={allImages}
                                allReadmes={allReadmes}
                            />
                        </div>
                    </React.Fragment>
                )}
            />

        </Switch>
    );
};

Main.propTypes = {
    allProjects: PropTypes.array,
    allImages: PropTypes.array,
    allReadmes: PropTypes.array
};

export default Main;
