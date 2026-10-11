"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { DownloadIcon, ArrowRightIcon, GithubIcon, LinkedinIcon, InstagramIcon, MailIcon } from './Icons';
import { getAssetPath } from '@/data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
  onCopyEmail: () => void;
}

export default function Hero({ onOpenCvModal, onCopyEmail }: HeroProps) {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`container ${styles.heroGrid}`}>
        {/* Left Column: Greeting, Name, Role & CTAs */}
        <div className={styles.heroContent}>

          <div className={styles.headingGroup}>
            <span className={styles.greetingText}>Hi, I&apos;m</span>
            <h1 className={styles.nameHeadline}>
              <span className={styles.maroonGradientText}>Nathasa Bintang Kayesa</span>
            </h1>
            <h2 className={styles.roleSubheadline}>Digital Product Designer &amp; UI/UX Specialist</h2>
          </div>

          <p className={styles.subheadline}>
            I create modern, responsive, and animated web experiences with smooth animations and exceptional user experience.
          </p>

          <div className={styles.ctaGroup}>
            <button
              type="button"
              onClick={onOpenCvModal}
              className={styles.primaryCta}
              aria-label="Download CV"
            >
              <DownloadIcon />
              <span>Download CV</span>
            </button>

            <a href="#contact" className={styles.secondaryCta}>
              <span>Contact Me</span>
              <ArrowRightIcon />
            </a>
          </div>

          <div className={styles.socialRow}>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconBtn}
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <GithubIcon />
            </a>
            
            <a
              href="https://www.linkedin.com/in/nathasa-bintang-kayesa-0b2891325/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconBtn}
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <LinkedinIcon />
            </a>

            <a
              href="https://www.instagram.com/nathasa.kayezz?rpxt=MTRxb25iaHFqenI2OA=="
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIconBtn}
              aria-label="Instagram Profile"
              title="Instagram"
            >
              <InstagramIcon />
            </a>

            <button
              type="button"
              onClick={onCopyEmail}
              className={styles.socialIconBtn}
              title="Click to copy email address"
              aria-label="Copy Email"
            >
              <MailIcon />
            </button>
          </div>
        </div>

        {/* Right Column: Circular Avatar Showcase */}
        <div className={styles.showcaseWrapper}>
          <div className={styles.glowingRingBackground} />
          <div className={styles.orbitRing} />
          
          <div className={styles.avatarCircularContainer}>
            <div className={styles.circularImageWrapper}>
              <Image
                src={getAssetPath("/foto nat.jpg")}
                alt="Nathasa Bintang Kayesa"
                width={420}
                height={420}
                priority
                className={styles.avatarImage}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

