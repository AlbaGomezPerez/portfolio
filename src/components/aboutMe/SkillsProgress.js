import React from 'react';
import { Progress } from 'antd';
import '../../styles/skills.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Results = () => {
  AOS.init({
    duration: 3000,
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    mirror: true,
  });

  return (
    <div className="results__container">
      <div className="percentage__section">
        <Progress className="percentage__circle" type="circle" data-aos="percentage-animation" percent={99} strokeColor="#8dc5be" strokeWidth={10} format={() => 'Creativa'} />
        <Progress className="percentage__circle" type="circle" data-aos="percentage-animation" percent={90} strokeColor="#ebc0b5" strokeWidth={10} format={() => 'HTML/CSS'} />
        <Progress className="percentage__circle" type="circle" data-aos="percentage-animation" percent={89} strokeColor="#efc563" strokeWidth={10} format={() => 'Curiosa'} />
        <Progress className="percentage__circle" type="circle" data-aos="percentage-animation" percent={80} strokeColor="#8ac29b" strokeWidth={10} format={() => 'Javascript'} />
        <Progress className="percentage__circle" type="circle" data-aos="percentage-animation" percent={76} strokeColor="#996d75" strokeWidth={10} format={() => 'Positiva'} />
        <Progress className="percentage__circle" type="circle" data-aos="percentage-animation" percent={70} strokeColor="#bf7c30" strokeWidth={10} format={() => 'React'} />
        <Progress className="percentage__circle" type="circle" data-aos="percentage-animation" percent={60} strokeColor="#70b4c2" strokeWidth={10} format={() => 'Angular'} />
        <Progress className="percentage__circle" type="circle" data-aos="percentage-animation" percent={70} strokeColor="#8dc5be" strokeWidth={10} format={() => 'Jira'} />
        <Progress className="percentage__circle" type="circle" data-aos="percentage-animation" percent={76} strokeColor="#ebc0b5" strokeWidth={10} format={() => 'GitHub'} />
        <Progress className="percentage__circle" type="circle" data-aos="percentage-animation" percent={80} strokeColor="#efc563" strokeWidth={10} format={() => 'SCRUM'} />
        <Progress className="percentage__circle" type="circle" data-aos="percentage-animation" percent={89} strokeColor="#8ac29b" strokeWidth={10} format={() => 'Trello'} />
        <Progress className="percentage__circle" type="circle" data-aos="percentage-animation" percent={76} strokeColor="#996d75" strokeWidth={10} format={() => 'Git'} />
      </div>
    </div>
  );
};

export default Results;
