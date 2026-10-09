"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';
import { DownloadIcon, ArrowRightIcon, LinkedinIcon, InstagramIcon, MailIcon, StarIcon, SparklesIcon } from './Icons';
import { getAssetPath } from '@/data/portfolioData';

interface HeroProps {
  onOpenCvModal: () => void;
  onCopyEmail: () => void;
}

export default function Hero({ onOpenCvModal, onCopyEmail }: HeroProps) {
  return (
    <section id="hero" className={styles.heroSection}>
      <div className={`container ${styles.heroGrid}`}>
        {/* Left Column: Headlines & CTA */}
        <div className={styles.heroContent}>
          <div className={styles.statusPill}>
            <span className={styles.statusDot} />
            <span>Lorem Ipsum Dolor Sit • Available for Q4 2026</span>
          </div>

          <h1 className={styles.headline}>
            Lorem ipsum dolor sit amet,{' '}
            <span className={styles.maroonGradientText}>consectetur adipiscing</span> elit
            sed do eiusmod tempor.
          </h1>

          <p className={styles.subheadline}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          <div className={styles.ctaGroup}>
            <button
              type="button"
              onClick={onOpenCvModal}
              className={styles.primaryCta}
              aria-label="Get My CV"
            >
              <DownloadIcon />
              <span>Get My CV</span>
            </button>

            <a href="#projects" className={styles.secondaryCta}>
              <span>Explore My Projects</span>
              <ArrowRightIcon />
            </a>
          </div>

          <div className={styles.socialRow}>
            <span className={styles.socialLabel}>Connect:</span>
            
            <a
              href="https://www.linkedin.com/in/nathasa-bintang-kayesa-0b2891325/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialPill}
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://instagram.com/nathasa.kayezz?rpxt=MTRxb25iaHFqenI2OA==/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialPill}
              aria-label="Instagram Profile"
            >
              <InstagramIcon />
              <span>Instagram</span>
            </a>

            <button
              type="button"
              onClick={onCopyEmail}
              className={styles.socialPill}
              title="Click to copy email address"
              aria-label="Copy Email"
            >
              <MailIcon />
              <span>Copy Email</span>
            </button>
          </div>
        </div>

        {/* Right Column: Floating Profile Glass Showcase */}
        <div className={styles.showcaseWrapper}>
          <div className={styles.showcaseAura} />
          
          <div className={styles.profileCard}>
            <div className={styles.floatingBadgeTop}>
              <StarIcon />
              <span>99% Client Satisfaction</span>
            </div>

            <div className={styles.imageFrame}>
              <Image
                src={getAssetPath("/nathasa-avatar.jpg")}
                alt="Nathasa - Digital Product Designer"
                width={500}
                height={500}
                priority
                className={styles.profileImage}
              />
            </div>

            <div className={styles.floatingBadgeBottom}>
              <SparklesIcon />
              <span>5+ Years Design Exp</span>
            </div>

            <div className={styles.profileMeta}>
              <div className={styles.profileHeader}>
                <div className={styles.profileName}>Nathasa</div>
                <div className={styles.profileHandle}>@nathasa.design</div>
              </div>

              <div className={styles.specialtyPills}>
                <span className={styles.tagPill}>UI/UX Design</span>
                <span className={styles.tagPill}>Design Systems</span>
                <span className={styles.tagPill}>Prototyping</span>
                <span className={styles.tagPill}>Motion</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
