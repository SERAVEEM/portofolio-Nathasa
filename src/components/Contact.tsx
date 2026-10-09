"use client";

import React from 'react';
import styles from './Contact.module.css';
import { MailIcon, LinkedinIcon, InstagramIcon, DownloadIcon, ExternalLinkIcon, CopyIcon, ArrowRightIcon } from './Icons';

interface ContactProps {
  onOpenCvModal: () => void;
  onCopyEmail: () => void;
}

export default function Contact({ onOpenCvModal, onCopyEmail }: ContactProps) {
  return (
    <section id="contact" className="section">
      <div className="container">
        {/* Fresh Wave-inspired Highlight Rounded Glass Banner */}
        <div className={styles.contactBanner}>
          <div className={styles.bannerGlow} />

          <div className={styles.contactGrid}>
            {/* Left Column: Heading, Description, Action */}
            <div className={styles.leftCol}>
              <div className={styles.supportTag}>
                <MailIcon />
                <span>Get In Touch</span>
              </div>

              <h2 className={styles.bannerTitle}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit?
              </h2>

              <p className={styles.bannerDesc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>

              <div className={styles.buttonRow}>
                <a
                  href="mailto:nathasa.design@domain.com"
                  className={styles.directEmailBtn}
                >
                  <span>Send an Email</span>
                  <ArrowRightIcon />
                </a>

                <button
                  type="button"
                  onClick={onOpenCvModal}
                  className={styles.getResumeBtn}
                >
                  <DownloadIcon />
                  <span>Get My CV</span>
                </button>
              </div>
            </div>

            {/* Right Column: Direct Channels & Handwritten Flourish */}
            <div className={styles.rightCol}>
              {/* Email channel with copy feature */}
              <div
                className={styles.channelCard}
                style={{ cursor: 'pointer' }}
                onClick={onCopyEmail}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => { if (e.key === 'Enter') onCopyEmail(); }}
              >
                <div className={styles.channelLeft}>
                  <div className={styles.channelIcon}>
                    <MailIcon />
                  </div>
                  <div className={styles.channelInfo}>
                    <span className={styles.channelTitle}>Direct Email</span>
                    <span className={styles.channelDetail}>nathasa.design@domain.com</span>
                  </div>
                </div>

                <div className={styles.channelAction}>
                  <CopyIcon />
                  <span>Copy</span>
                </div>
              </div>

              {/* LinkedIn channel */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelCard}
              >
                <div className={styles.channelLeft}>
                  <div className={styles.channelIcon}>
                    <LinkedinIcon />
                  </div>
                  <div className={styles.channelInfo}>
                    <span className={styles.channelTitle}>LinkedIn Profile</span>
                    <span className={styles.channelDetail}>Connect for career & contracts</span>
                  </div>
                </div>

                <div className={styles.channelAction}>
                  <span>Connect</span>
                  <ExternalLinkIcon />
                </div>
              </a>

              {/* Instagram channel */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.channelCard}
              >
                <div className={styles.channelLeft}>
                  <div className={styles.channelIcon}>
                    <InstagramIcon />
                  </div>
                  <div className={styles.channelInfo}>
                    <span className={styles.channelTitle}>Instagram</span>
                    <span className={styles.channelDetail}>@nathasa.design</span>
                  </div>
                </div>

                <div className={styles.channelAction}>
                  <span>Follow</span>
                  <ExternalLinkIcon />
                </div>
              </a>

              {/* Handwritten script flourish (Directly inspired by Fresh Wave's "Juntos vamos mais longe!") */}
              <div className={styles.handwrittenFlourish}>
                Juntos vamos mais longe ✨
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
