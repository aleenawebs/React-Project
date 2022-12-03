import React from 'react';
import CountUp from 'react-countup';
import Group1 from '../images/group1.svg';
import Group2 from '../images/group2.svg';
import Group3 from '../images/group3.svg';
import Group4 from '../images/group4.svg';



const CounterUpPage =() => {
    const list = [
        {
            image: <img src={Group1} alt="" />,
            start: '0',
            end:'100',
            duration:'2',
            delay:0,
            text: 'Happy customers',
            value: 'k',
          
        },
        {
            image: <img src={Group2} alt="" />,
            start: '0',
            end:'10',
            duration:'2',
            delay:0,
            text: 'Presentations',
            value: '%',
          
        },
        {
            image: <img src={Group3} alt="" />,
            start: '0',
            end:'50',
            duration:'2',
            delay:0,
            text: 'Quality assuranc',
            value: '%',
          
        },
        {
            image: <img src={Group4} alt="" />,
            start: '0',
            end:'80',
            duration:'2',
            delay:0,
            text: 'Customer rating',
            value: 'k+',
          
        },
      ];
    return (
        <>
        {list.map(item => (
      <li key={item.id}>
        <div className="icons">{item.image}</div>
        <div className="process-head"><CountUp start={item.start} end={item.end} duration={item.duration} delay={item.delay} /><span>{item.value}</span></div>
        <p>{item.text}</p>
      </li>
    ))}
        
        </>
     
    )
}
export default CounterUpPage
