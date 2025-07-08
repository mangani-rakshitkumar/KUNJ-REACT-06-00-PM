import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Contact = () => (
  <>
    <Navbar />
    <div className="page">
      <h1>River: Flow Seamlessly 🌊</h1>
      <p>With WebBrand River, your users enjoy a fluid experience. Reach out to us and we’ll help your digital products flow with beauty and ease.</p>
      <img src="https://images.alphacoders.com/587/587451.jpg" alt="River Stream" className="section-img" />

      <section>
        <h2>📞 Connect With Flow</h2>
        <ul>
          <li>📧 Email: <strong>hello@webbrand.com</strong></li>
          <li>📞 Phone: +91-9876543210</li>
          <li>📍 Address: 123 Flow Street, Digital Bay</li>
        </ul>
      </section>

      <section>
        <h2>💬 Business Hours</h2>
        <p>Mon – Fri: 9 AM to 6 PM IST</p>
        <p>Saturday: 10 AM to 2 PM | Sunday: Closed</p>
      </section>
    </div>
    <Footer />
  </>
);

export default Contact;