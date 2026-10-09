"use client";

import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { DownloadIcon, LinkedinIcon, InstagramIcon, MailIcon, MenuIcon, CloseIcon } from './Icons';

interface NavbarProps {
  onOpenCvModal: () => void;
  onCopyEmail: () => void;
}

export default function Navbar({ onOpenCvModal, onCopyEmail }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <a href="#hero" className={styles.brand} onClick={closeMenu}>
          <div className={styles.logoMonogram}>N</div>
          <div className={styles.brandText}>
            <span className={styles.brandName}>NATHASA</span>
            <span className={styles.brandRole}>Product & UI/UX</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav aria-label="Main Navigation">
          <ul className={styles.navLinks}>
            <li><a href="#hero" className={styles.navLink}>Home</a></li>
            <li><a href="#projects" className={styles.navLink}>Projects</a></li>
            <li><a href="#experience" className={styles.navLink}>Experience</a></li>
            <li><a href="#achievements" className={styles.navLink}>Achievements</a></li>
            <li><a href="#tools" className={styles.navLink}>Tools I Use</a></li>
            <li><a href="#contact" className={styles.navLink}>Contact</a></li>
          </ul>
        </nav>

        {/* Action Controls & Socials */}
        <div className={styles.navActions}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconBtn}
            title="LinkedIn Profile"
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIconBtn}
            title="Instagram Profile"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <button
            type="button"
            onClick={onCopyEmail}
            className={styles.socialIconBtn}
            title="Copy Email Address"
            aria-label="Copy Email"
          >
            <MailIcon />
          </button>

          <button
            type="button"
            onClick={onOpenCvModal}
            className={styles.cvButton}
            aria-label="Get My CV"
          >
            <DownloadIcon />
            <span>Get My CV</span>
          </button>

          <button
            type="button"
            className={styles.menuToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <a href="#hero" onClick={closeMenu}>Home</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#achievements" onClick={closeMenu}>Achievements</a>
          <a href="#tools" onClick={closeMenu}>Tools I Use</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>

          <div className={styles.mobileSocialRow}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconBtn}
              style={{ display: 'flex' }}
              aria-label="LinkedIn"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconBtn}
              style={{ display: 'flex' }}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <button
              type="button"
              onClick={() => {
                onCopyEmail();
                closeMenu();
              }}
              className={styles.socialIconBtn}
              style={{ display: 'flex' }}
              aria-label="Copy Email"
            >
              <MailIcon />
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              onOpenCvModal();
              closeMenu();
            }}
            className={styles.cvButton}
            style={{ width: '100%', justifyContent: 'center', marginTop: '8px' }}
          >
            <DownloadIcon />
            <span>Get My CV</span>
          </button>
        </div>
      )}
    </header>
  );
}
