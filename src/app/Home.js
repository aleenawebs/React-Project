import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Owl from '../components/Owldemo1';
import Quality from '../components/Quality';
import Testimonial from '../components/Testimonial';
import Process from '../components/Process';
import Service1 from '../images/service-drk1.png';
import Service from '../components/Service';
import CounterUpPage from '../components/CounterUpPage';



 function Home() {
  return (
  <React.Fragment>
    <header id="banner">
      <Container>
        <Row>
          <Col lg={4}>
            <div className="banner-caption">
              <div>
                <h2 className="main-caption animate-reveal animate-first" data-aos="fade-up" data-aos-delay="200">Reimagine your presentation</h2>
                <div className="hide-header-sec">
                  <div className="header-text-wrap animate-reveal animate-first" data-aos="fade-up" data-aos-delay="400">
                    <p>
                    Best Presentation Design Agency who can elevate the story into another level and providing all types of presentation services to our customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam , quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur . Excepteur sint
                    </p>
                  </div>
                  <div className="animate-reveal animate-second">
                    <Link to='/contact' className="button button-2">Enquiry<span className="iconify" data-icon="carbon:arRow-up-right"></span></Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
     
          <Col lg={8}>
            <div className="slideceo_video_wrapper">
              <div className="scnd_wrap"><iframe id="projectplayer" src="https://player.vimeo.com/video/763698896?h=6b9554bb56?&title=0&byline=0&portrait=0&api=1&background=1&mute=0&loop=0" frameborder="0" controls="0"allow="autoplay; picture-in-picture" allowfullscreen></iframe></div>
            </div>
            <div className="hide-header-sec2">
 <div className="header-text-wrap animate-reveal animate-first" data-aos="fade-up" data-aos-delay="400">
    <p>
      Best Presentation Design Agency who can elevate the story into another level and providing all types of presentation services to our customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam , quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur . Excepteur sint
    </p>
  </div>
  <div className="animate-reveal animate-second">
    <Link to="/contact" className="button button-2">Enquiry
      <span className="iconify" data-icon="carbon:arRow-up-right"></span>
    </Link>
  </div>
</div>
        </Col>
      
      </Row>
  
    </Container>
</header>
<section id="projects-section">
    <Container>
       <Row>
         <Col lg={5}>
           <div className="project-content">
             <h3>Projects at glance</h3>
             <p>Best Presentation Design Agency who can elevate the story into another level and providing all types of presentation services to our customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
           </div>
         </Col>
         <Col lg={7}>
           <div className="project-details">
             <ul id="counter">
              <CounterUpPage />
             </ul>
           </div>
         </Col>
       </Row>
    </Container>
  </section>
  <section id="presentations">
<Container>
  <h2>Discover custom <br /> presentation solutions</h2>
  <div className="presentation-list-box">
    <div className="list-wrapper">
      <Row>
      <Col lg={7}>
        <div className="presentation-sep-wrapper">
        <div className="presentation-box1">
        <h4>Discover custom presentation solutions for your unique business challenges.</h4>
        <p>Best Presentation Design Agency who can elevate the story into another level and providing all types of presentation services to our customers. Lorem ipsum dolor sit amet, consectetur adipiscing elit , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         <Link to="/services" className="button button-2"
            >VIEW ALL<span className="iconify" data-icon="carbon:arRow-up-right"></span></Link>
        </div>
        
        
        </div>
      </Col>
      <Col lg={5}>
         <div className="presentation-box3">
        <ul>
        
          <li>
          <Service />
          </li>
        </ul>
      </div>
    </Col>
    </Row>
    </div>
  </div>
</Container>
</section>
<section id="slider-section">
    <Container>
      <div className="slider-head" data-aos="fade-right">
        <h2>Discover your unique business challenges.</h2>
      </div>
      <div className="slider-sub-head" data-aos="fade-left">
          <h3>
            The presentation quality standards that you can choose based on
            your requirements.
          </h3>
      </div>

      <div className="contain">
      <Owl/>
      </div>
    </Container>
  </section>
  <section id="service-slider">
    <Container>
      <div className="common-sub-head">
        <h3>choose the required quality standards</h3>
        <div className="common-paragraph">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ipsa aspernatur nisi facilis vitae corporis laboriosam, 
          sunt quibusdam unde consectetur ducimus quas quaerat omnis. 
          Facere quasi eum ad debitis nostrum. Saepe?</p>
        </div>
      </div>
    <div className="contain02">
      <Quality />
</div>
    </Container>
  </section>
  <section id="plan-section">
    <div className=""></div>
  </section>
  <section id="our-process">
    <Container>
      <div className="process-head" data-aos="fade-right">
        <h3>our process</h3>
      </div>
      <div className="slider-sub-head process-sub-head" data-aos="fade-left">
        <h3>
          The presentation quality standards that you can choose based on your
          requirements.
        </h3>
      </div>

      <div className="processes">
        <Row>
          <Col lg={4}></Col>
          <Col lg={8}>
            <ul>
             <Process />
            </ul>
          </Col>
          <div className="our-clients-talk">
            <div className="client-head-wrap">
              <div  data-aos="fade-right">
                <h3>Our Clients</h3>
              </div>
             
            </div>
          </div>
          <div className="client-testimonial">
            <div className="blank_space"></div>
            <div className="testimonial-head">
              <div className="main-head">
                <h4>Testimonials</h4>
              </div>
              <div className="sub-head" data-aos="fade-left">
                <h3>
                  We know what makes a good presentation. We help companies
                  across many industries succeed at telling their story.
                </h3>
              </div>
            </div>
          </div>
          <div className="quotes-wrap">
          <Testimonial />
          </div>
        </Row>
      </div>
    </Container>
  </section>
    </React.Fragment>
  );
}

export default Home;