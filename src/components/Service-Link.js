import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Service1 from '../images/service01.jpg';
import Service2 from '../images/service02.jpg';
import Service3 from '../images/service03.jpg';
import Service4 from '../images/service04.png';

function ServiceLink() {
  return (
<OwlCarousel className='owl-theme' items={4} margin={8} autoplay ={true} loop={true} animateOut={'fadeOut'} nav id="owl-carousel6">
<div className="item">
      <a href="#cpp" className="service-list-wrapper">
          <div className="service-image-wrapper"><img src={Service1} /></div>
          <div className="service-name-wrap">Company Profile Presentation</div>
      </a>
    </div>
    <div className="item">
       <a href="#ipd" className="service-list-wrapper">
          <div className="service-image-wrapper"><img src={Service2} /></div>
          <div className="service-name-wrap">Invester Pitch Decks</div>
      </a>
    </div>
    <div className="item">
       <a href="#wp" className="service-list-wrapper">
          <div className="service-image-wrapper"><img src={Service3} /></div>
          <div className="service-name-wrap">Webinar Presentation</div>
      </a>
    </div>
    <div className="item">
       <a href="#ep" className="service-list-wrapper">
          <div className="service-image-wrapper"><img src={Service4} /></div>
          <div className="service-name-wrap">Event Presentation</div>
      </a>
    </div>
    <div className="item">
       <a href="#sp" className="service-list-wrapper">
          <div className="service-image-wrapper"><img src={Service3} /></div>
          <div className="service-name-wrap">Sales Presentation</div>
      </a>
    </div>
    <div className="item">
       <a href="#bi" className="service-list-wrapper">
          <div className="service-image-wrapper"><img src={Service1} /></div>
          <div className="service-name-wrap">Branding Identity</div>
      </a>
    </div>

</OwlCarousel>
  );
}

export default ServiceLink;