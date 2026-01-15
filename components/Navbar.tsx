import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Page, CartItem } from '../types';

interface NavbarProps {
  cart: CartItem[];
}

const Navbar: React.FC<NavbarProps> = ({ cart }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  // Trigger reveal animations on scroll
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-left, .reveal-right, .reveal-up');

    const revealOnScroll = () => {
      revealElements.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
          el.classList.add('active');
        }
      });
    };

    // Initial check
    revealOnScroll();

    window.addEventListener('scroll', revealOnScroll);
    return () => window.removeEventListener('scroll', revealOnScroll);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar glass">
      <div className="container nav-container">
        <NavLink to={Page.HOME} className="logo-link">
          <img src="/logo.jpg" alt="Fruits Heaven Logo" className="nav-logo" />
          <span className="brand-name">Juicy Cold Pressed</span>
        </NavLink>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><NavLink to={Page.HOME}>Home</NavLink></li>
          <li><NavLink to={Page.MENU}>Menu</NavLink></li>
          <li><NavLink to={Page.WHY_US}>Why Us</NavLink></li>
          <li>
            <NavLink to={Page.ORDER} className="btn-primary small">
              Order Now {cartCount > 0 && `(${cartCount})`}
            </NavLink>
          </li>
        </ul>
        <div
          className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;