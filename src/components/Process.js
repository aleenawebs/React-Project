import React from 'react';
import Teamwork from '../images/teamwork.png';
import Excellence from '../images/excellence.png';
import Strategy from '../images/strategy.png';


function Process() {
    const list = [
        {
          image: <img src={Teamwork} alt="" />,
          head: 'Teamwork',
          content: ' We streamlined our process with an in-house team of high-calibre storytellers',
          
        },
        {
          image: <img src={Excellence} alt="" />,
          head: 'Excellence',
          content: 'We know every project is unique, just like our clients',
          
        },
        {
            image: <img src={Strategy} alt="" />,
            head: 'Excellence',
            content: 'We know every project is unique, just like our clients',
            
          },
          {
            image: <img src={Teamwork} alt="" />,
            head: 'Teamwork',
            content: ' We streamlined our process with an in-house team of high-calibre storytellers',
            
          },
          {
            image: <img src={Teamwork} alt="" />,
            head: 'Strategy',
            content: ' We streamlined our process with an in-house team of high-calibre storytellers',
            
          },
      ];
    return (
<>
{list.map(item => (
      <li key={item.id}>
        <div className="process-img">{item.image}</div>
        <h4 className="process-head">{item.head}</h4>
        <p>{item.content}</p>
      </li>
    ))}

</>
    );
  }


  
  export default Process;