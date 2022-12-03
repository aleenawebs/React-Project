import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Footerimg from '../images/footer.jpg';
import Fav from '../images/fav.png';

import { useNavigate, Link } from "react-router-dom";
function Footer() {
    return(
        <>
    <footer id="footer-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-12 col-sm-12">
            <div class="footer-wraper">
              <div class="social-media-wrap">
                <ul>
                  <li class="active"><a href="">facebook</a></li>
                  <li><a href="">instagram</a></li>
                  <li><a href="">linkedin</a></li>
                  <li><a href="">twitter</a></li>
                </ul>
              </div>
              <div class="footer-menu">
                <ul>
                  <li><Link to='/portfolio '>Portfolio</Link></li>
                  <li><Link to='/services '>Services</Link></li>
                  <li><Link to='/about '>About</Link></li>
                  <li><Link to='/blog '>Blog</Link></li>
                  <li><Link to='/contact '>Contact</Link></li>
                  <li><Link to='/freeslides '>Free Slides</Link></li>
                </ul>
              </div>
              <div class="mail-wrap">
                <h4>DROP US A LINE</h4>
                <a href="mailto:hello@og.agency" class="mail-to"
                  ><span>hello</span>@og.agency</a>
                <div class="footer-contact-btn">
                  <a href="contact.php" class="became-a-client-btn button button-2">become a client <span
                class="iconify"
                data-icon="carbon:arrow-up-right"></span></a>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-logo-sec">
            <img src={Fav} alt="" class="rotate"/>
          </div>
          <div class="col-lg-6">
            <div class="footer-img-sec">
            <img src={Footerimg} alt="" />
            </div>
            
          </div>
        </div>
        <div class="copyright">
          <a id="scroll-top" class="moving-arrow"
            ><span class="iconify" data-icon="carbon:arrow-up"></span></a>
          <p>
            All Right Reserved © 2022 One Creative — Presentation Design Agency
          </p>
          <a href="https://www.crantia.com/" target="_blank" class="crantia-tec">Crantia Technologies</a>
        </div>
      </div>
      <div class="footer-img">
        <img src={Footerimg} alt="" />
      </div>
    </footer>
   
        </>
      
    )
}

export default Footer;