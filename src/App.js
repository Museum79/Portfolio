import React from 'react';

// import components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopBtn from './components/BackToTopBtn';
import Skills2 from './components/Skills2';

const App = () => {
  return (
    <div>
    <Header/>
    <Hero/>
    <Skills/>
    <About/>
    <Skills2/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    <BackToTopBtn/>
    </div>
  );
};

export default App;
