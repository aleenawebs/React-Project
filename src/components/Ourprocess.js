import React from 'react';
import Processimg1 from '../images/step-1-bg.png';
import Processimg2 from '../images/process1.png';
import Processimg3 from '../images/step-2-bg.png';
import Processimg4 from '../images/process2.png';
import Processimg5 from '../images/step-3-bg.png';
import Processimg6 from '../images/process3.png';
import Processimg7 from '../images/step-4-bg.png';
import Processimg8 from '../images/process4.png';
import Processimg9 from '../images/step-5-bg.png';
import Processimg10 from '../images/process5.png';


function OurProcess() {
    const list = [
        {
            prosimg: <img src={Processimg1} alt="" />,
            prosimg2: <img src={Processimg2} alt="" />,
            proshead: ' Ecpectation Setting',
            proscont: 'Short brief of project via a call or email',
        },
        {
            prosimg: <img src={Processimg3} alt="" />,
            prosimg2: <img src={Processimg4} alt="" />,
            proshead: ' Initial Draft',
            proscont: 'Develop initial design demos for review',
        },
        {
            prosimg: <img src={Processimg5} alt="" />,
            prosimg2: <img src={Processimg6} alt="" />,
            proshead: 'Design Process',
            proscont: 'Continue design process based on the approved initial draft',
        },
        {
            prosimg: <img src={Processimg7} alt="" />,
            prosimg2: <img src={Processimg8} alt="" />,
            proshead: 'Completed draft',
            proscont: 'Submitting completed draft for client review',
        },
        {
            prosimg: <img src={Processimg9} alt="" />,
            prosimg2: <img src={Processimg10} alt="" />,
            proshead: 'Final delivery',
            proscont: 'Fine tune the document if customer have any tweaks on the document submit the final draft',
        },
      ];
    return (
<>
{list.map(item => (
      <li key={item.id}>
        <div className="list-wrap-02">
                        <div className="steps-img">
                            {item.prosimg}
                        </div>
                        <div className="process-image">
                            {item.prosimg2}
                        </div>
                        <div className="process-text">
                            <h5>{item.proshead}</h5>
                            <p>{item.proscont}</p>
                        </div>
                    </div>
      </li>
    ))}

</>
    );
  }


  
  export default OurProcess;