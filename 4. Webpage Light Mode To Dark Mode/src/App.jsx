import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [theme, setTheme] = useState('Dark Mode');
  const isDark = theme === 'Light Mode';

  const handleTheme = () => {
    setTheme(isDark ? 'Dark Mode' : 'Light Mode');
  };

  return (
    <div className={isDark ? 'container dark' : 'container light'}>
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">🍀MOUNTAIN VIEW</h2>
        <button className="theme-toggle" onClick={handleTheme}>
          {isDark ? '🌞' : '🌚'}
        </button>
      </nav>

      {/* Hero Section with Side Image + Paragraph */}
      <section className="hero-section">
        <div className="hero-img">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="Mountain Landscape"
          />
        </div>
        <div className="hero-text">
          <h1>Discover the Mountains</h1>
          <p>
            Mountains are not just geological formations — they are symbols of strength and
            tranquility. Their towering peaks and sweeping valleys inspire awe, courage, and
            a deep connection to nature. Whether you hike through their trails or simply gaze
            at their majesty, mountains remind us of the vast beauty that the Earth holds.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="about fade-in">
        <h2>About Our Mission</h2>
        <p>
          We aim to promote eco-tourism and preserve the natural beauty of the world's greatest
          mountain ranges. Our journeys are safe, sustainable, and unforgettable.
        </p>
      </section>

      {/* Services Section */}
      <section className="services fade-in">
        <h2>What We Offer</h2>
        <div className="service-cards">
          <div className="service-card">⛰ Guided Tours</div>
          <div className="service-card">🧗 Adventure Hikes</div>
          <div className="service-card">🏕 Camping Spots</div>
          <div className="service-card">📷 Nature Photography</div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery fade-in">
        {[
          {
            src: 'https://images.pexels.com/photos/240040/pexels-photo-240040.jpeg?auto=compress&cs=tinysrgb&w=800',
            label: 'Scenic View #1',
          },
          {
            src: 'https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800',
            label: 'Scenic View #2',
          },
          {
            src: 'https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?auto=compress&cs=tinysrgb&w=800',
            label: 'Scenic View #3',
          },
          {
            src: 'https://t3.ftcdn.net/jpg/10/13/39/92/360_F_1013399247_8TImR3FML4fVHTJUOLvtL2d6YKfs4Uhz.jpg',
            label: 'Scenic View #4',
          },
        ].map((item, index) => (
          <div className="card" key={index}>
            <img src={item.src} alt={item.label} />
            <p>{item.label}</p>
          </div>
        ))}
      </section>

      {/* Contact Form */}
      <section className="contact fade-in">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name..." required />
          <input type="email" placeholder="Your Email..." required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer fade-in">
        <p>© 2025 MountainView. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;