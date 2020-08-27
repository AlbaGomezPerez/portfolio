import React from 'react';
import AboutMeDescription from './AboutMeDescription';
import AboutMeSkills from './AboutMeSkills';
import Experience from './Experience';


function AboutMe() {
    return (
        <React.Fragment>
            <AboutMeDescription />
            <AboutMeSkills />
            <Experience />
        </React.Fragment>
    )
};


export default AboutMe;
