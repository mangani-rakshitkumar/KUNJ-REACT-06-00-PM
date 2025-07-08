import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => (
  <>
    <Navbar />
    <div className="page">
      <h1>Mountain: Rise with Stability 🏔️</h1>
      <p>WebBrand Mountain is all about strength, structure, and reaching new heights with your digital infrastructure.</p>
      <img src="https://cdn.wallpapersafari.com/96/98/vLQrsM.jpg" alt="Mountain View" className="section-img" />

      <section>
        <h2>🔧 Built to Endure</h2>
        <p>We create software that scales, with solid architecture and future-proof strategies.</p>
      </section>

      <section>
        <h2>🧭 Navigate Your Climb</h2>
        <ul>
          <li>Modular backend architecture</li>
          <li>Agile workflows</li>
          <li>Enterprise-ready security</li>
        </ul>
      </section>
    </div>
    <Footer />
  </>
);

export default About;