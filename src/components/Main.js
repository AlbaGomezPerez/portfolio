import React from 'react';
import '../styles/main.css';
import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Switch } from 'react-router';
import ProjectDetail from './projects/ProjectDetail';


import AboutMe from './aboutMe/AboutMe';
import Landing from './Landing';


function Main (props) {
    const { allProjects, allImages, allReadmes } = props;


  return (
    <div className="main">
      <Switch>
          <Route
              exact
              path="/project/:id"
              render={routerProps => (
                  <div style={{ overflow: 'hidden' }}>
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
                        <div style={{ overflow: 'hidden' }}>
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
    </div>
  );
};

Main.propTypes = {
  allProjects: PropTypes.array,

};

export default Main;
