import React from 'react';
import AboutMeDescription from './AboutMeDescription';
import AboutMeSkills from './AboutMeSkills';
import Experience from './Experience';
import Projects from '../projects/Proyects';
import Contact from '../Contact';
import Landing from '../Landing';



function AboutMe(props) {
    const { allProjects, allImages, allReadmes } = props;
    return (
        <React.Fragment>
            <Landing/>
            <div id="aboutMe">initial</div>
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
