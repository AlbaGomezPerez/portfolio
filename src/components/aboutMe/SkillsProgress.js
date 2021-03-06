import React from 'react';
import { Progress } from 'antd';
import '../../styles/skills.css';

/**
 * Component which render skills content
 */
const Results = () => {
  return (
    <div className="results__container">
      <div className="percentage__section">
        <Progress
            className="percentage__circle"
            type="circle"
            data-aos="percentage-animation"
            percent={99} strokeColor="#8dc5be"
            strokeWidth={10} format={() => 'HTML/CSS'}>
        </Progress>

        <Progress
            className="percentage__circle"
            type="circle"
            data-aos="percentage-animation"
            percent={80}
            strokeColor="#8ac29b"
            strokeWidth={10} format={() => 'Javascript'} />
        <Progress
            className="percentage__circle"
            type="circle"
            data-aos="percentage-animation"
            percent={70}
            strokeColor="#bf7c30"
            strokeWidth={10} format={() => 'React'} />
        <Progress
            className="percentage__circle"
            type="circle"
            data-aos="percentage-animation"
            percent={60}
            strokeColor="#70b4c2"
            strokeWidth={10} format={() => 'Angular'} />
        <Progress
            className="percentage__circle"
            type="circle"
            data-aos="percentage-animation"
            percent={50}
            strokeColor="#996d75"
            strokeWidth={10} format={() => 'TypeScript'} />
        <Progress
            className="percentage__circle"
            type="circle"
            data-aos="percentage-animation"
            percent={50}
            strokeColor="#caeddc"
            strokeWidth={10} format={() => 'Jest'} />
        <Progress
            className="percentage__circle"
            type="circle"
            data-aos="percentage-animation"
            percent={76}
            strokeColor="#e6d5dc"
            strokeWidth={10} format={() => 'Git'} />

        <Progress
            className="percentage__circle"
            type="circle"
            data-aos="percentage-animation"
            percent={76}
            strokeColor="#fcd3b6"
            strokeWidth={10} format={() => 'GitHub'} />
        <Progress
            className="percentage__circle"
            type="circle"
            data-aos="percentage-animation"
            percent={80}
            strokeColor="#e0cfa6"
            strokeWidth={10} format={() => 'SCRUM'} />
        <Progress
            className="percentage__circle"
            type="circle"
            data-aos="percentage-animation"
            percent={70}
            strokeColor="#98aba9"
            strokeWidth={10} format={() => 'Jira'} />
        <Progress
            className="percentage__circle"
            type="circle"
            data-aos="percentage-animation"
            percent={89}
            strokeColor="#caeddc"
            strokeWidth={10} format={() => 'Trello'} />
        <Progress
            className="percentage__circle"
            type="circle"
            data-aos="percentage-animation"
            percent={90}
            strokeColor="#d9ae02"
            strokeWidth={10} format={() => 'Adobe'} />
        <Progress
            className="percentage__circle"
            type="circle"
            data-aos="percentage-animation"
            percent={90}
            strokeColor="#ebc0b5"
            strokeWidth={10} format={() => 'Creativa'} />
        <Progress
            className="percentage__circle"
            type="circle"
            data-aos="percentage-animation"
            percent={89}
            strokeColor="#efc563"
            strokeWidth={10} format={() => 'Curiosa'} />

        <Progress
            className="percentage__circle"
            type="circle"
            data-aos="percentage-animation"
            percent={76}
            strokeColor="#996d75"
            strokeWidth={10} format={() => 'Positiva'} />
        <Progress
            className="percentage__circle"
            type="circle"
            data-aos="percentage-animation"
            percent={76}
            strokeColor="#c98673"
            strokeWidth={10} format={() => 'Trabajo'} />
      </div>
    </div>
  );
};

export default Results;
