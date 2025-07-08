import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Home = () => (
  <>
    <Navbar />
    <div className="page">
      <h1>Tree: Growth in Every Branch 🌳</h1>
      <p>At WebBrand Tree, we grow your digital presence like nature — strong roots, healthy branches, and vibrant leaves.</p>
      <img src="https://images6.alphacoders.com/394/394006.jpg" alt="Tree Forest" className="section-img" />

      <section>
        <h2>🌱 Rooted in Design</h2>
        <p>We plant the seeds of creativity through UI/UX, growing into intuitive, beautiful interfaces for your users.</p>
      </section>

      <section>
        <h2>🍃 Branching Out</h2>
        <ul>
          <li>Custom websites & platforms</li>
          <li>SEO growth strategies</li>
          <li>Cross-platform performance</li>
        </ul>
      </section>
    </div>
    <Footer />
  </>
);

export default Home;