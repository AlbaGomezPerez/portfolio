import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import '../styles/landing.css';
import Wave from 'react-wavify';
import AOS from 'aos';
import video from '../images/Computer.mp4';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Landing = () => {
    AOS.init({
        duration: 3000,
    });


    return (
        <div className="landing-video" data-aos="welcome-page">
            <video autoPlay muted loop id="myVideo">
                <source src={video} type="video/mp4"></source>
            </video>

            <div className="landing-text">
            <h2 className="landing-name">Alba Gómez</h2>
            <span className="landing-subtext">Desarrolladora Front-End</span>

            <div className="landing-networks">
                <div className="landing-logo">
                    <a href="https://twitter.com/GomezPerezAlba" target="_blank" rel="noopener noreferrer">
                    <div className="network-image-landing twitterLanding"></div>
                    </a>
                </div>
                <div className="landing-logo">
                    <a href="https://www.linkedin.com/in/albagomezperez/" target="_blank" rel="noopener noreferrer">
                    <div className="network-image-landing linkedinLanding" ></div>
                    </a>
                </div>
                <div className="landing-logo">
                    <a href="https://github.com/AlbaGomezPerez" target="_blank" rel="noopener noreferrer">
                    <div className="network-image-landing githubLanding" ></div>
                    </a>
                </div>
            </div>
            </div>
            <Link className="link-icon" to="/aboutMe#aboutMe">
             <i className="large material-icons arrow">arrow_drop_down</i>
            </Link>

            <Wave
                mask="url(#mask)"
                fill="white"
                className="wave"
                options={{ points: 4, speed: 0.2, amplitude: 60 }}>
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="10%" stopColor="white" />
                        <stop offset="90%" stopColor="black" />
                    </linearGradient>
                </defs>
            </Wave>
            <Wave
                mask="url(#mask)"
                fill="white"
                className="wave2"
                options={{ points: 4, speed: 0.2, amplitude: 80 }}>
                <defs>
                    <linearGradient id="gradient" gradientTransform="rotate(90)">
                        <stop offset="10%" stopColor="red" />
                        <stop offset="90%" stopColor="blue" />
                    </linearGradient>
                </defs>
            </Wave>

        </div>
    );
};

export default Landing;


