import React, { useEffect, useRef } from "react";
import "./App.css";

function App() {
  const productsRef = useRef(null);
  const productItemsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate the title
          const title = entry.target.querySelector('h3');
          if (title) {
            setTimeout(() => title.classList.add('animate'), 100);
          }
          
          // Animate product items with staggered delay
          const items = entry.target.querySelectorAll('.product-item');
          items.forEach((item, index) => {
            setTimeout(() => item.classList.add('animate'), 200 + (index * 100));
          });
        }
      });
    }, observerOptions);

    if (productsRef.current) {
      observer.observe(productsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const openMail = () => {
    window.location.href = "mailto:griffinschoco@gmail.com";
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/919542537753", "_blank");
  };

  const openInstagram = () => {
    window.open("https://instagram.com/griffins_cocoa_00", "_blank");
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1>Griffin's</h1>
            <span>Handmade Chocolate</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h2>Website Coming Soon</h2>
              <p>Kunafa Bars, Gift Packages, Kunafa Bites, and Custom Choco Name Bars — Crafted with Love.</p>
            </div>
            <div className="hero-image">
              <img src="/images/griffins.png" alt="Griffin's Chocolates" />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products" ref={productsRef}>
        <div className="container">
          <h3>Our Artisan Collection</h3>
          <div className="product-grid">
            <div className="product-item" ref={el => productItemsRef.current[0] = el}>
              <div className="product-image">
                <img src="/images/image-33.png" alt="Artisan Chocolates" />
              </div>
              <h4>Artisan Chocolates</h4>
            </div>
            
            <div className="product-item" ref={el => productItemsRef.current[1] = el}>
              <div className="product-image">
                <img src="/images/image-35.png" alt="Gift Packages" />
              </div>
              <h4>Gift Packages</h4>
            </div>
            
            <div className="product-item" ref={el => productItemsRef.current[2] = el}>
              <div className="product-image">
                <img src="/images/image-43.png" alt="Custom Chocolates" />
              </div>
              <h4>Custom Chocolates</h4>
            </div>
            
            <div className="product-item" ref={el => productItemsRef.current[3] = el}>
              <div className="product-image">
                <img src="/images/image-46.png" alt="Kunafa Delights" />
              </div>
              <h4>Kunafa Delights</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured">
        <div className="container">
          <div className="featured-content">
            <div className="featured-text">
              <h3>Exquisite Artisan Chocolates</h3>
              <p>Handcrafted with the finest ingredients and traditional techniques, each piece is a work of art.</p>
            </div>
            <div className="featured-images">
              <img src="/images/image-47.png" alt="Featured Chocolate" />
              <img src="/images/image-52.png" alt="Chocolate Collection" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <div className="container">
          <h3>Get in Touch</h3>
          <div className="contact-buttons">
            <button onClick={openMail} className="contact-btn">
              <span>✉</span>
              Email Us
            </button>
            <button onClick={openWhatsApp} className="contact-btn">
              <span>💬</span>
              WhatsApp
            </button>
            <button onClick={openInstagram} className="contact-btn">
              <span>📷</span>
              Instagram
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>Our Website is Getting Ready — Stay Tuned for Sweet Surprises 🍫✨</p>
          <p className="copyright">© 2025 Griffin's Handmade Chocolate. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
