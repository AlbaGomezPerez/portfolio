import React from 'react';
import '../styles/landing.css';
import Wave from 'react-wavify';
import AOS from 'aos';
// import video from '../images/video.mp4';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Landing = () => {
    AOS.init({
        duration: 3000,
    });


    return (
        <div className="landing-video" data-aos="welcome-page">
            {/*<video autoPlay muted loop id="myVideo">*/}
            {/*    <source src={video} type="video/mp4"></source>*/}
            {/*</video>*/}

            <h2 className="landing-text">Alba Gómez</h2>
            {/*<i className="large material-icons" >arrow_drop_down</i>*/}

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
