"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      {/* ================= DESKTOP FLUID HERO (NODE 37:20) ================= */}
      <div className="desktop-hero-container">
        {/* Perfectly aligned navbar: flexible lines + diamond tips + centered nav */}
        <header className="hero-header-desktop">
          <div className="hero-nav-line left" aria-hidden="true">
            <div className="nav-line-bar" />
            <div className="nav-line-diamond" />
          </div>
          <nav className="hero-nav-desktop" aria-label="Desktop Navigation">
            <button type="button" className="nav-item-btn active">Intro</button>
            <button type="button" className="nav-item-btn">About</button>
            <button type="button" className="nav-item-btn">Works</button>
            <button type="button" className="nav-item-btn">Contacts</button>
          </nav>
          <div className="hero-nav-line right" aria-hidden="true">
            <div className="nav-line-diamond" />
            <div className="nav-line-bar" />
          </div>
        </header>

        {/* Hero stage: raised photo & pure code Bebas Neue typography */}
        <div className="hero-stage-desktop">
          {/* 1. Behind Photo: Solid Fill Bebas Neue Typography */}
          <div className="portfolio-title-stage back" aria-hidden="true">
            <svg
              className="portfolio-svg-layer"
              viewBox="-38.25 0 1498.5 334"
              preserveAspectRatio="xMidYMid meet"
            >
              <text
                x="711"
                y="326"
                textAnchor="middle"
                fontFamily="var(--font-bebas)"
                fontSize="450"
                letterSpacing="0.011em"
                fill="#814545"
                stroke="#814545"
                strokeWidth="3.6"
                paintOrder="stroke fill"
              >
                PORTFOLIO
              </text>
            </svg>
          </div>

          {/* 2. Middle: Hero Cutout Photo */}
          <div className="hero-photo-wrapper">
            <Image
              src="/person_photo.png"
              alt="Nathasa Bintang Kayesa"
              width={1897}
              height={1067}
              priority
              className="hero-photo-img"
            />
          </div>

          {/* 3. In Front of Photo: Outlined Bebas Neue Stroke + Figma Node 37:22 Gradient */}
          <div className="portfolio-title-stage front" aria-hidden="true">
            <svg
              className="portfolio-svg-layer"
              viewBox="-38.25 0 1498.5 334"
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <linearGradient id="figmaPortfolioGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="32.5%" stopColor="#814545" />
                  <stop offset="43.8%" stopColor="#814545" stopOpacity="0" />
                  <stop offset="52.2%" stopColor="#814545" stopOpacity="0" />
                  <stop offset="56.7%" stopColor="#814545" stopOpacity="0" />
                  <stop offset="62.9%" stopColor="#814545" />
                </linearGradient>
              </defs>
              <text
                x="711"
                y="326"
                textAnchor="middle"
                fontFamily="var(--font-bebas)"
                fontSize="450"
                letterSpacing="0.011em"
                fill="url(#figmaPortfolioGrad)"
                stroke="#814545"
                strokeWidth="3.6"
                paintOrder="stroke fill"
              >
                PORTFOLIO
              </text>
            </svg>
          </div>

          {/* 4. Left bilateral content */}
          <div className="hero-column-left">
            <div className="hero-col-main">
              <p className="hero-description left">
                Apalah ini diisi apalah disini gaktau yang penting ada aja dulu space
              </p>
              <a href="#projects" className="hero-btn-primary">View Projects</a>
            </div>
            <span className="hero-author-desktop">Nathasa Bintang kayesa</span>
          </div>

          {/* 5. Right bilateral content */}
          <div className="hero-column-right">
            <div className="hero-col-main">
              <p className="hero-description right">
                Apalah ini diisi apalah disini gaktau yang penting ada aja dulu space
              </p>
              <a href="#cv" className="hero-btn-secondary">Get my CV</a>
            </div>
            <div className="hero-socials-desktop">
              <SocialLinks iconSize={32} />
            </div>
          </div>
        </div>
      </div>

      {/* ================= MOBILE VIEW (NODE 14:28 & 46:182) ================= */}
      <main className="mobile-wrapper">
        <div className="mobile-topbar">
          <button
            type="button"
            className="menu-toggle-btn"
            aria-label="Open navigation menu"
            onClick={() => setIsDrawerOpen(true)}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>

        {/* Slide-over Drawer */}
        <div
          className={`mobile-drawer-overlay ${isDrawerOpen ? "open" : ""}`}
          onClick={() => setIsDrawerOpen(false)}
          aria-hidden="true"
        />
        <aside className={`mobile-drawer ${isDrawerOpen ? "open" : ""}`} aria-label="Mobile Navigation">
          <div>
            <div className="drawer-header">
              <button
                type="button"
                className="close-btn"
                aria-label="Close navigation menu"
                onClick={() => setIsDrawerOpen(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="drawer-nav">
              <button type="button" className="drawer-link-btn active" onClick={() => setIsDrawerOpen(false)}>Intro</button>
              <button type="button" className="drawer-link-btn" onClick={() => setIsDrawerOpen(false)}>About</button>
              <button type="button" className="drawer-link-btn" onClick={() => setIsDrawerOpen(false)}>Works</button>
              <button type="button" className="drawer-link-btn" onClick={() => setIsDrawerOpen(false)}>Contacts</button>
            </nav>
          </div>

          <div className="drawer-footer">
            <span className="drawer-author">Nathasa Bintang Kayesa</span>
            <div className="drawer-socials">
              <SocialLinks iconSize={18} />
            </div>
          </div>
        </aside>

        {/* Mobile Stage matching Figma 14:28 */}
        <section className="hero-stage-mobile" id="intro-mobile">
          <Image
            src="/person_photo.png"
            alt="Nathasa Bintang Kayesa"
            width={960}
            height={540}
            priority
            className="hero-photo-mobile"
          />

          <MobilePortfolioTitle />

          <div className="hero-details-mobile">
            <p className="hero-bio-mobile">
              Apalah ini diisi apalah disini gaktau yang penting ada aja dulu space
            </p>

            <div className="hero-actions-mobile">
              <a href="#projects" className="btn-primary-mobile">View Projects</a>
              <a href="#cv" className="btn-secondary-mobile">Get my CV</a>
            </div>

            <div className="hero-footer-mobile">
              <span className="author-name-mobile">Nathasa Bintang Kayesa</span>
              <div className="social-links-mobile">
                <SocialLinks iconSize={16} />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function MobilePortfolioTitle() {
  return (
    <div className="portfolio-text-mobile" aria-label="PORTFOLIO">
      <svg
        className="mobile-word-svg"
        viewBox="0 0 314 160"
        role="img"
        aria-label="PORT"
      >
        <defs>
          <linearGradient id="mobilePortGrad" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="22%" stopColor="#814545" />
            <stop offset="37%" stopColor="#814545" stopOpacity="0" />
            <stop offset="47%" stopColor="#814545" stopOpacity="0" />
            <stop offset="64%" stopColor="#814545" stopOpacity="0" />
            <stop offset="78%" stopColor="#814545" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="136"
          textAnchor="middle"
          fontFamily="var(--font-bebas)"
          fontSize="187.69"
          fill="url(#mobilePortGrad)"
          stroke="#814545"
          strokeWidth="1.6395"
          paintOrder="stroke fill"
          letterSpacing="0.04em"
        >
          PORT
        </text>
      </svg>
      <svg
        className="mobile-word-svg"
        viewBox="0 0 316 160"
        role="img"
        aria-label="FOLIO"
      >
        <defs>
          <linearGradient id="mobileFolioGrad" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="12%" stopColor="#814545" />
            <stop offset="37%" stopColor="#814545" stopOpacity="0" />
            <stop offset="53%" stopColor="#814545" stopOpacity="0" />
            <stop offset="79%" stopColor="#814545" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="136"
          textAnchor="middle"
          fontFamily="var(--font-bebas)"
          fontSize="187.69"
          fill="url(#mobileFolioGrad)"
          stroke="#814545"
          strokeWidth="1.6395"
          paintOrder="stroke fill"
          letterSpacing="0.04em"
        >
          FOLIO
        </text>
      </svg>
    </div>
  );
}

function SocialLinks({ iconSize = 24 }: { iconSize?: number }) {
  return (
    <div className="social-group">
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-btn"
        aria-label="Instagram"
      >
        <Image src="/instagram.svg" alt="Instagram" width={iconSize} height={iconSize} />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon-btn"
        aria-label="LinkedIn"
      >
        <Image src="/linkedin.svg" alt="LinkedIn" width={iconSize} height={iconSize} />
      </a>
      <a
        href="mailto:contact@nathasabintang.com"
        className="social-icon-btn"
        aria-label="Email"
      >
        <Image src="/mail.svg" alt="Email" width={iconSize} height={iconSize} />
      </a>
    </div>
  );
}
