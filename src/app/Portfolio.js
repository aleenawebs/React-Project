import React from 'react'
import List1 from '../images/slide1.png';
import List2 from '../images/slide2.png';
import List3 from '../images/slide3.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Enquiry from '../components/Enquiry';
export default function Portfolio() {
  return (
    <>
    <section id="common-header-section">
    <Container>
        <div class="common-header-wrapper common-header-wrapper-02">
        <div class="common-header-caption common-caption" data-aos="fade-up">
            <h2 class="common-cap">Portfolio</h2>
            <p>Lorem ipsum
dolor sit amet,
consectetur adipiscing elit , sed
do eiusmod tempor incididunt</p>
        </div>
        </div>
    </Container>
</section>
<section id="portfolio-page" data-aos="fade-up">
  <Container>
  <div class="portfolio">
           <Row>
            <Col lg={6}>
              <div class="pf-wrap">
                <div class="pf-image">
                  <img src={List1} />
                  <div class="view-more-slides">
                                <span>View more slides</span>
                            </div>
                </div>
                <div class="pf-content">
                  <div class="p-f-head">
                    <h4>Corporate Presentation</h4>
                  </div>
                  <div class="p-f-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet pulvinar placerat. Praesent tincidunt tellus sit amet felis volutpat, in tempus lectus gravida. Mauris sagittis, dui posuere lobortisfringilla, justo libero semper</p>
                  </div>
                  <span class="end-text">Corporate</span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div class="pf-wrap">
                <div class="pf-image">
                  <img src={List2} />
                  <div class="view-more-slides">
                                <span>View more slides</span>
                            </div>
                </div>
                <div class="pf-content">
                  <div class="p-f-head">
                    <h4>Business Presentation</h4>
                  </div>
                  <div class="p-f-content">
                    <p>This organization known for their collective action abilities wanted to make a video to drive action on social issues. We storyboarded, conceptualized visuals, created custom graphics, and animated to bring the video to life.</p>
                  </div>
                  <span class="end-text">Business</span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div class="pf-wrap">
                <div class="pf-image">
                  <img src={List3} />
                  <div class="view-more-slides">
                                <span>View more slides</span>
                            </div>
                </div>
                <div class="pf-content">
                  <div class="p-f-head">
                    <h4>Mizrahi Developments</h4>
                  </div>
                  <div class="p-f-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce aliquet pulvinar placerat. Praesent tincidunt tellus sit amet felis volutpat, in tempus lectus gravida. Mauris sagittis, dui posuere lobortisfringilla, justo libero semper</p>
                  </div>
                  <span class="end-text">Corporate</span>
                </div>
              </div>
            </Col>

           </Row>
          </div>
  </Container>
      </section>
      <Enquiry />
      </>
  );
}
