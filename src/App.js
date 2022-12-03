import React from 'react'
import logo from './logo.svg';
import './App.css';
import './Responsive.css';
import Header from './app/Header';
import Footer from './app/Footer';
import Home from './app/Home';
import About from './app/About';
import Blog from './app/Blog';
import Services from './app/Services';
import Freeslides from './app/Freeslides';
import Portfolio from './app/Portfolio';
import Contact from './app/Contact';
import CountUp from 'react-countup';


import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function App() {
  return (
    <Router>
     <Header />
     <Routes>
      <Route path='/' element={<Home/>   }></Route>
      <Route path='/about' element={<About /> }></Route>
      <Route path='/services' element={<Services /> }></Route>
      <Route path='/portfolio' element={<Portfolio /> }></Route>
      <Route path='/freeslides' element={<Freeslides /> }></Route>
      <Route path='/blog' element={<Blog /> }></Route>
      <Route path='/contact' element={<Contact /> }></Route>
     </Routes>
     <Footer />
    </ Router>
  );
}

export default App;
