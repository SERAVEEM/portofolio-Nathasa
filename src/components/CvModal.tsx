"use client";

import React from 'react';
import styles from './Modals.module.css';
import { CloseIcon, DownloadIcon, CheckIcon } from './Icons';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownload: () => void;
}

export default function CvModal({ isOpen, onClose, onDownload }: CvModalProps) {
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close CV Modal"
        >
          <CloseIcon />
        </button>

        <div className={styles.cvHeader}>
          <div>
            <h2 className={styles.cvCandidateName}>Nathasa</h2>
            <p className={styles.cvCandidateRole}>Senior Digital Product & UI/UX Designer</p>
          </div>

          <button
            type="button"
            className={styles.cvDownloadBtn}
            onClick={onDownload}
          >
            <DownloadIcon />
            <span>Download PDF</span>
          </button>
        </div>

        <div className={styles.cvHighlightBox}>
          <div className={styles.cvHighlightItem}>
            <span className={styles.cvHighlightLabel}>Experience</span>
            <span className={styles.cvHighlightValue}>5+ Years</span>
          </div>
          <div className={styles.cvHighlightItem}>
            <span className={styles.cvHighlightLabel}>Location</span>
            <span className={styles.cvHighlightValue}>Available Globally / Remote</span>
          </div>
          <div className={styles.cvHighlightItem}>
            <span className={styles.cvHighlightLabel}>Availability</span>
            <span className={styles.cvHighlightValue}>Full-time / High Impact</span>
          </div>
        </div>

        <div className={styles.cvSection}>
          <h3 className={styles.cvSectionTitle}>Executive Summary</h3>
          <p className={styles.cvText}>
            Computer Science student with strong organizational leadership, UI/UX design, application security, and product management experience across Bina Nusantara Computer Club (BNCC) and HIMTI BINUS University.
          </p>
        </div>

        <div className={styles.cvSection}>
          <h3 className={styles.cvSectionTitle}>Core Competencies</h3>
          <p className={styles.cvText}>
            • UI/UX Design & Prototyping (Figma) • Application Security & Penetration Testing • Technical Project Management • Cross-Functional Team Leadership • Financial Management & Event Operations
          </p>
        </div>

        <div className={styles.cvSection}>
          <h3 className={styles.cvSectionTitle}>Education & Affiliations</h3>
          <p className={styles.cvText}>
            • BINUS University — Computer Science (Malang, East Java)<br />
            • Bina Nusantara Computer Club (BNCC) — Executive CFO & UI/UX Trainer<br />
            • HIMTI BINUS University — Manager of Creative and Design
          </p>
        </div>
      </div>
    </div>
  );
}
