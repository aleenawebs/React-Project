import React from 'react';
import { Link } from 'react-router-dom';
import Service1 from '../images/service-drk1.png';
import Service2 from '../images/service-drk2.png';
import Service3 from '../images/service-drk3.png';
import Service4 from '../images/service-drk4.png';
import Service5 from '../images/service-drk5.png';
import Service6 from '../images/service-drk6.png';


function Service() {
    const list = [
        {
          image: <img src={Service1} alt="" />,
          content: 'Company Profile Presentation',
          
        },
        {
          image: <img src={Service2} alt="" />,
          content: 'Invester Pitch Decks',
          
        },
        {
            image: <img src={Service3} alt="" />,
            content: 'Webinar Presentation',
            
          },
          {
            image: <img src={Service5} alt="" />,
            content: 'Event Presentation',
            
          },
          {
            image: <img src={Service6} alt="" />,
            content: 'Sales Presentation',
            
          },
      ];
    return (
<>
{list.map(item => (
      <Link key={item.id}>
        <div>{item.image}</div>
        <span>{item.content}</span>
      </Link>
    ))}

</>
    );
  }


  
  export default Service;