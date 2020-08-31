import React from 'react';
import '../styles/landing.css';
import Wave from 'react-wavify';
import AOS from 'aos';
import video from '../images/videoWave.mp4';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';
import github from '../images/gitHub.png';

const Landing = () => {
    AOS.init({
        duration: 3000,
    });


    return (
        <div className="landing-video" data-aos="welcome-page">
            <video autoPlay muted loop id="myVideo">
                <source src={video} type="video/mp4"></source>
            </video>

            {/*<iframe*/}
            {/*    src={video}*/}
            {/*    id="myVideo"*/}
            {/*    frameBorder="0"*/}
            {/*    allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*    allowfullscreen>*/}
            {/*</iframe>*/}


            <h2 className="landing-text">Alba Gómez</h2>
            <span className="landing-subtext">Desarrolladora Front-End</span>
            <i className="large material-icons arrow">arrow_drop_down</i>

            <div className="landing-networks">
                <div className="landing-logo">
                    <a href="https://twitter.com/GomezPerezAlba" target="_blank" rel="noopener noreferrer">
                    <img className="network-image-landing" src={twitter}></img>
                    </a>
                </div>
                <div className="landing-logo">
                    <a href="https://www.linkedin.com/in/albagomezperez/" target="_blank" rel="noopener noreferrer">
                    <img className="network-image-landing" src={linkedin}></img>
                    </a>
                </div>
                <div className="landing-logo">
                    <a href="https://github.com/AlbaGomezPerez" target="_blank" rel="noopener noreferrer">
                    <img className="network-image-landing" src={github}></img>
                    </a>
                </div>
            </div>

            <Wave
                mask="url(#mask)"
                fill="white"
                className="wave"
                options={{ points: 4, speed: 0.2, amplitude: 70 }}>
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="10%" stopColor="white" />
                        <stop offset="90%" stopColor="black" />
                    </linearGradient>
                    {/*<mask id="mask">*/}
                    {/*    <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)"  />*/}
                    {/*</mask>*/}
                </defs>
            </Wave>

        </div>
    );
};

export default Landing;


{/*<iframe width="560" height="315" src="https://www.youtube.com/embed/D3l36prbbvA" frameBorder="0"*/}
{/*        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>*/}
