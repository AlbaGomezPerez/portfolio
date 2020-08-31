import React from 'react';
import AboutMeDescription from './AboutMeDescription';
import AboutMeSkills from './AboutMeSkills';
import Experience from './Experience';
import Projects from '../projects/Proyects';
import Contact from '../Contact';



function AboutMe(props) {
    const { allProjects, allImages, allReadmes } = props;
    return (
        <React.Fragment>
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


export default AboutMe;
