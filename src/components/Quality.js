import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate, Link } from "react-router-dom";
import Ba2 from '../images/ba2.png';
import Ba1 from '../images/ba1.png';

function Quality() {
  return (
<OwlCarousel className='owl-theme' items={1} margin={8} autoplay ={true} loop={true}  nav id="owl-carousel6">
<div className="item">
    <div className="service-slider-wrap">
      <Row>
        <Col lg={5}>
          <div className="sliding-content">
            <div>
            <h3>You Can Get</h3>
            <p>Top-notch, unique, customized theme and style
Images that communicate the story
Clean and minimalist slide layouts
Standardised formattin</p>
<p>Top-notch, unique, customized theme and style
Images that communicate the story
Clean and minimalist slide layouts
Standardised formattin</p>
<Link to="/services" className="button button-2"
            >get a quote<span
              className="iconify"
              data-icon="carbon:arRow-up-right"
            ></span></Link>
            </div>
            
          </div>
        </Col>
        <Col lg={7}>
          <div className="sliding-image-sec">
          <img src={Ba1} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
  <div className="item">
    <div className="service-slider-wrap">
      <Row>
        <Col lg={5}>
          <div className="sliding-content">
            <div>
            <h3>You Can Get</h3>
            <p>Top-notch, unique, customized theme and style
Images that communicate the story
Clean and minimalist slide layouts
Standardised formattin</p>
<p>Top-notch, unique, customized theme and style
Images that communicate the story
Clean and minimalist slide layouts
Standardised formattin</p>
<a href="service.php" className="button button-2"
            >get a quote<span
              className="iconify"
              data-icon="carbon:arRow-up-right"
            ></span></a>
            </div>
            
          </div>
        </Col>
        <div className="col-lg-7">
          <div className="sliding-image-sec">
          <img src={Ba2} alt="" />
          </div>
        </div>
      </Row>
    </div>
  </div>
</OwlCarousel>
  );
}

export default Quality;