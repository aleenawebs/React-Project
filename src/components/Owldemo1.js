import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import After1 from '../images/after1.png';
import After2 from '../images/after2.png';
import Before1 from '../images/before1.png';
import Before2 from '../images/before2.png';

function Owl() {
  return (
<OwlCarousel className='owl-theme' items={2} margin={8} autoplay ={true} loop={true}  nav id="owl-carousel6">
<div className="item">
            <div className="before">
              <img src={After1} alt="" />
            </div>
            <div className="before-after-tag box">
              <span>Before</span>
              <span>After</span>
            </div>
            <div className="after">
              <img src={Before1} alt=""  />
            </div>
          </div>
          <div className="item">
            <div className="before">
              <img src={After2} alt="" />
            </div>
            <div className="before-after-tag box">
              <span>Before</span>
              <span>After</span>
            </div>
            <div className="after">
              <img src={Before2} alt="" />
            </div>
          </div>
</OwlCarousel>
  );
}

export default Owl;