import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Enquiry from '../components/Enquiry'; 
import OurProcess from '../components/Ourprocess';   
import Team from '../images/team.jpg';
import Founder from '../images/founder.png';
function About() {
  return (
    <>
    <section id="common-header-section">
       
    <Container>
        <div className="common-header-wrapper common-header-wrapper-02">
        <div className="common-header-caption common-caption" data-aos="fade-up">
            <h2 className="common-cap">
BEST PRESENTATION DESIGN AGENCY WHO CAN ELEVATE THE STORY
INTO ANOTHER LEVE</h2>
            <p>Lorem ipsum
dolor sit amet,
consectetur adipiscing elit , sed
do eiusmod tempor incididunt</p>
        </div>
        </div>
    </Container>
</section>
<section id="team-image">
    <Container>
        <div className="team-image">
        <img src={Team} alt="" />
    </div>
    </Container>
</section>
<section id="about-content">
    <Container>
        <div className="about-content">
            <Row>
                <div className="col-lg-5">
                    <div className="about-content-head">
                        <h3>Solutions Your ideas, your business. We'll build the technology. We inspire throughfresh approaches & perspectives.</h3>
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="about-content-paragraph">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet pulvinar placerat. Praesent tincidunt tellussit amet felis volutpat, in tempus lectus gravida. Mauris sagittis, dui posuere lobortisfringilla, justo libero semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sapien ex, lobortis ac viverra sit amet, laoreet vitae lacus. Integer vel sodales tellus nec ultricies diam. Pellentesque malesuada purus augue, feugiat convallis metus venenatis tristique. Nam accumsan urna risus, placerat consectetur ligula tempor in.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce aliquet pulvinar placerat. Praesent tincidunt tellussit amet felis volutpat, in tempus lectus gravida. Mauris Sagittis, dui posuere lobortisfringilla, justo libero semperl and providing all types of presentation services to our customers.</p>
                    </div>
                </div>
            </Row>
        </div>
    </Container>
</section>


<section id="process-section-wrapper">
    <Container>
        <div className="process-head-2 process-head-3">
          <h3>our process</h3>
         <p>The presentation quality standards that you
‘can choose based on your requirements.
</p>
        </div>
        <div className="prcess-list">
            <ul>
            <OurProcess />
            </ul>
        </div>
    </Container>
</section>
<section id="founder-section">
    <Container>
        <div className="row">
            <div className="col-lg-5">
                <div className="founder-image">
                    <img src={Founder} alt="" />
                </div>
            </div>
            <div className="col-lg-7">
                <div className="founder-details">
                    <div>
                        <h3>meet the founder</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ex nec eros tempor hendrerit. Vivamus malesuada leo eros, a fringilla libero rhoncus in. Nunc sed nunc nec leo tristique pulvinar. Integer neque mauris, porta a iaculis ut, sagittis sed justo. Mauris venenatis quis erat ornare aliquet.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ex nec eros tempor hendrerit. Vivamus malesuada leo eros, a fringilla libero rhoncus in. Nunc sed nunc nec leo tristique pulvinar. Integer neque mauris, porta a iaculis ut, sagittis sed justo. Mauris venenatis quis erat ornare aliquet.</p>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ex nec eros tempor hendrerit.</p>

                    <div className="founder-name">
                        <h4>Aswin</h4>
                        <span>Founder & CEO</span>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </Container>
</section>
<section id="faq-section">
    <Container>
        <div className="accordian-wrapper">
            <div className="accordian-main-box">
                <h3>FAQs</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla venenatis ex nec eros tempor hendrerit. Vivamus malesuada leo eros, a fringilla libero rhoncus in. Nunc sed nunc nec leo tristique pulvinar.Integer neque mauris, porta a iaculis ut, sagittis sed justo. </p>
                <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Accordion Item #1</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
                       
            </div>
        </div>
    </Container>
</section>
<Enquiry />
    
    </>
    
  )
}

export default About;