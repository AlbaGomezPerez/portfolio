import React from 'react';
import '../styles/landing.css';
import video from '../images/video.mp4';
import AOS from 'aos';
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

            <h2 className="landing-text">Alba Gómez</h2>
            <i className="large material-icons" >arrow_drop_down</i>

        </div>
    );
};

export default Landing;
