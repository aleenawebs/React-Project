import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Testimonial() {
  return (
<OwlCarousel className='owl-theme' items={1} margin={8} autoplay ={true} loop={true}>
<div className="item">
<div className="testimonial-wrap">
                  <div>
                  <div className="quotes-icon">
                    <span className="iconify" data-icon="ooui:quotes-ltr"></span>
                  </div>
                  <p>
                    Lorem ipsum dolor sitamet ,consectetur adipiscing elit ,
                    sed do eiusmod tempor incididunt ut labore etdolore magna
                    aliqua . Ut enim ad minimLorem ipsum dolor sit amet ,
                  </p>
                 <div className="name-section">
                   <span>PETER VISSER</span>
                   <label>VISSER CONSULTING</label>
                 </div>
                 </div>
                </div>
          </div>
         
</OwlCarousel>
  );
}

export default Testimonial;