import React from 'react';
import PropTypes from 'prop-types';
import AboutMeDescription from './AboutMeDescription';
import AboutMeSkills from './AboutMeSkills';
import Experience from './Experience';
import Projects from '../projects/Projects';
import Contact from '../Contact';

/**
 * Component which render AboutMe components
 * @param props that contains projects, images projects and readmes projects.
 */
function AboutMe(props) {
    const { allProjects, allImages, allReadmes } = props;
    return (
        <React.Fragment>
            <div id="aboutMe"></div>
            <AboutMeDescription />
            <AboutMeSkills />
            <Experience />
            <Projects
                allProjects={allProjects}
                allImages={allImages}
                allReadmes={allReadmes}
            />
            <Contact />
        </React.Fragment>
    )
};

AboutMe.propTypes = {
    allProjects: PropTypes.array,
    allImages: PropTypes.array,
    allReadmes: PropTypes.array
};

export default AboutMe;
