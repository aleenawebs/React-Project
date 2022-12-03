import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../images/logo.png';
import Scroll from '../components/Scroll';

import { useNavigate, Link } from "react-router-dom";
function Header() {
  
    return(
        <>
        <Scroll />
    <nav className="navbar" id="header-sroll" data-aos="fade-down">
      <div className="container">
        <Link to='/' className="brand">
          <img src={Logo} alt="" className="logo1" />
          <img src="images/logo2.png" alt="" className="logo2" />
        </Link>
        <input type="checkbox" id="nav" className="hidden" />
        <label for="nav" className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className="wrapper">
          <ul className="menu menu-1">
            <li className="menu-item active"><Link to='/portfolio '>Portfolio</Link></li>
            <li className="menu-item"><Link to='/services'>services</Link></li>
            <li className="menu-item"><Link to='/about'>about</Link></li>
            <li className="menu-item"><Link to='/blog'>blog</Link></li>
            <li className="menu-item"><Link to='/contact'>contact</Link></li>
            <li className="menu-item"><Link to='/freeslides'>free slides</Link></li>
          
          </ul>
          
        </div>
      </div>
    </nav>
   
        </>
      
    );
}
export default Header;