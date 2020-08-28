import React from 'react';
import '../styles/main.css';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Switch } from 'react-router';
// import Wave from "react-wavify";
import ProjectDetail from './projects/ProjectDetail';


// import Landing from './Landing';
import AboutMe from './aboutMe/AboutMe';
import Proyects from './projects/Proyects';
import Contact from './Contact';


function Main (props) {
    const { allProjects, allImages, allReadmes } = props;


  return (
    <div className="main">
      <Switch>
        <Route
            exact
            path="/aboutMe"
            render={routerProps => (
                <div>
                  <AboutMe />
                </div>
            )}
        />
        <Route

            path="/proyects"
            render={routerProps => (
                <div>
                  <Proyects
                      allProjects={allProjects}
                      allImages={allImages}
                      allReadmes={allReadmes}
                  />
                </div>
            )}
        />
        <Route
            path="/contact"
            render={routerProps => (
                <Contact/>
            )}
        />
          <Route
              path="/project/:id"
              render={routerProps => (
                  <ProjectDetail
                      Match={routerProps.match}
                      allProjects={allProjects}
                      allImages={allImages}
                      allReadmes={allReadmes}
                  />
              )}
          />
      </Switch>
    </div>
  );
};

Main.propTypes = {
  allProjects: PropTypes.array,

};

export default Main;
