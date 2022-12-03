import React from 'react'
import Enquiry from '../components/Enquiry';
import ServiceLink from '../components/Service-Link';
import Container from 'react-bootstrap/Container';
import Serviceimg1 from '../images/service01.jpg';
import Serviceimg2 from '../images/service02.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function Services() {
  return (
    <>
    <section id="common-header-section">
    <Container>
        <div className="common-header-wrapper">
        <div className="common-header-caption" data-aos="fade-up">
            <h2 className="common-cap animate-reveal animate-first">Services</h2>
            <div className="animate-reveal animate-second">
                     <p>Lorem ipsum
dolor sit amet,
consectetur adipiscing elit , sed
do eiusmod tempor incididunt ut
labore et dolore magna aliqua. Ut
enim ad minim veniam , quis</p>
            </div>
       
        </div>
        <div className="common-header-image">
                   <div className="adhd-top-video3">
    <div className="adhd-top-video4">
     <iframe width="560" height="315" src="https://www.youtube.com/embed/CWrIvL4mBtY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </div>
</div>
        </div>
        </div>
    </Container>
</section>
<section id="service-link-section">
    <Container>
  <div className="contain">
  <ServiceLink />
</div>
    </Container>
</section>
<section id="service-list-section">
    <Container>
        <Row>
            <Col lg={6}>
                <div className="service-list-head">
                    <h3 className="common-head">our work in the wild</h3>
                </div>
            </Col>
            <Col lg={6}>
                <div className="service-list-content">
                    <p> Lorem ipsum dolor sitamet ,consectetur adipiscing elit ,
                      sed do eiusmod tempor incididunt ut labore etdolore magna
                      aliqua . Ut enim ad minimLorem ipsum dolor sit amet</p>
                </div>
            </Col>
        </Row>
    </Container>
</section>
<section id="service-list-detail">
    <Container>
        <Row>
            <div className="service-main-section" id="cpp">
            <Col lg={12}>
                     <Row>
                    <Col lg={6}>
                        <div className="service-image" data-bs-toggle="modal" data-bs-target="#exampleModal-service">
                            <img src={Serviceimg1} />
                            <div className="view-more-slides">
                                <span>View more slides</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="service-content-wrapper">
                            <div>
                                 <h4>Company Profile Presentation</h4>
                            <p>Lorem ipsum dolor sitamet ,consectetur adipiscing elit ,
                      sed do eiusmod tempor incididunt ut labore etdolore magna
                      aliqua .</p>
                       <a href="service.php" className="button button-2">VIEW ALL<span
                className="iconify"
                data-icon="carbon:arrow-up-right"></span></a>
                            </div>
                           
                        </div>
                    </Col>
                </Row>
                </Col>
            </div>
              <div className="service-main-section" id="ipd">
            <Col lg={12}>
                     <Row>
                         <Col lg={6} className="hide-service">
                        <div className="service-image">
                            <img src={Serviceimg2} />
                            <div className="view-more-slides">
                                <span>View more slides</span>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="service-content-wrapper">
                            <div>
                                 <h4>Invester Pitch Decks</h4>
                            <p>Lorem ipsum dolor sitamet ,consectetur adipiscing elit ,
                      sed do eiusmod tempor incididunt ut labore etdolore magna
                      aliqua .</p>
                       <a href="service.php" className="button button-2"
              >VIEW ALL<span
                className="iconify"
                data-icon="carbon:arrow-up-right"></span></a>
                            </div>
                           
                        </div>
                    </Col>
                    <Col lg={8} className="hide02-service">
                        <div className="service-image">
                            <img src="images/service-list02.png" />
                            <div className="view-more-slides">
                                <span>View more slides</span>
                            </div>
                        </div>
                    </Col>
                </Row>
                </Col>
            </div>
        </Row>
    </Container>
</section>
<Enquiry />
    </>
  )
}
