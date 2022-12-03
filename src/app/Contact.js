import React from 'react'
import { Router } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact() {
  return (
    <>
    <section id="common-header-section">
    <Container>
        <div className="common-header-wrapper common-header-wrapper-02">
        <div className="common-header-caption common-caption" data-aos="fade-up">
            <h2 className="common-cap">Contact</h2>
            <p>Lorem ipsum
dolor sit amet,
consectetur adipiscing elit , sed
do eiusmod tempor incididunt</p>
        </div>
        </div>
    </Container>
</section>



<section id="contact-form-section">
    <Container>
            <Row>
                <Col lg={6}>
                    <h2 className="contact-heading">Contact Us</h2>
                    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Name" className="contact-input" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Phone Number" className="contact-input" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="email" placeholder="Email" className="contact-input" />
      </Form.Group>
      <FloatingLabel controlId="floatingSelect" label="Works with selects">
      <Form.Select aria-label="Floating label select example" className="contact-input">
        <option>Open this select menu</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </FloatingLabel>
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          className="contact-input" 
        />
      <Button variant="primary" type="submit" className="contact-submit"> 
        Submit
      </Button>
    </Form>
                </Col>
                <Col lg={6}>
                    <div className="google-map" data-aos="fade-left">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40711528.427616306!2d-71.43465899999998!3d51.479552100000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b72d393431db%3A0x502c771cdb820d7a!2sIKEA%20Lakeside!5e0!3m2!1sen!2sin!4v1658301398981!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Col>
        </Row>
    </Container>
</section>
<section id="contact-section">
    <Container>
        <Row>
            <Col lg={4}>
                <div className="contact-wrapper" data-aos="fade-up">
                    <div className="contact-icon-wrap">
                    <span className="iconify" data-icon="fluent:call-48-regular"></span>
                    </div>
                    <div className="contact-link">
                        <h3>Phone</h3>
                        <a href="tel:">+91 987654567</a>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
            <div className="contact-wrapper" data-aos="fade-up">
                    <div className="contact-icon-wrap">
                    <span className="iconify" data-icon="eva:email-outline"></span>
                    </div>
                    <div className="contact-link">
                        <h3>Email</h3>
                        <a href="tel:">hello@og.agency</a>
                    </div>
                </div>
            </Col>
            <Col lg={4}>
            <div className="contact-wrapper" data-aos="fade-up">
                    <div className="contact-icon-wrap">
                    <span className="iconify" data-icon="akar-icons:location"></span>
                    </div>
                    <div className="contact-link">
                        <h3>Address</h3>
                        <a href="tel:">248 Hedge St, NJ 07201</a>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
</section>
    </>
  )
}
export default Contact;