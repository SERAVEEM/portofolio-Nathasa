"use client";

import React from 'react';
import styles from './Footer.module.css';
import { LinkedinIcon, InstagramIcon, MailIcon } from './Icons';

interface FooterProps {
  onCopyEmail: () => void;
}

export default function Footer({ onCopyEmail }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerBrand}>
          <div className={styles.logoMonogram}>N</div>
          <span className={styles.footerText}>
            © 2026 Nathasa. All rights reserved. Designed with modern dark aesthetic.
          </span>
        </div>

        <div className={styles.footerSocials}>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            aria-label="LinkedIn"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialBtn}
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <button
            type="button"
            onClick={onCopyEmail}
            className={styles.socialBtn}
            aria-label="Copy Email"
          >
            <MailIcon />
          </button>

          <button
            type="button"
            onClick={scrollToTop}
            className={styles.backToTop}
            aria-label="Scroll back to top"
          >
            <span>Top ↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
