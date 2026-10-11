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
            <h2 className={styles.cvCandidateName}>Nathasa Bintang Kayesa</h2>
            <p className={styles.cvCandidateRole}>Computer Science & Cybersecurity | UI/UX & Product</p>
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
            <span className={styles.cvHighlightLabel}>Education</span>
            <span className={styles.cvHighlightValue}>BINUS University (GPA 3.86)</span>
          </div>
          <div className={styles.cvHighlightItem}>
            <span className={styles.cvHighlightLabel}>Phone</span>
            <span className={styles.cvHighlightValue}>+62 852-8394-9092</span>
          </div>
          <div className={styles.cvHighlightItem}>
            <span className={styles.cvHighlightLabel}>Email</span>
            <span className={styles.cvHighlightValue}>nathasakayesaa@gmail.com</span>
          </div>
        </div>

        <div className={styles.cvSection}>
          <h3 className={styles.cvSectionTitle}>Summary</h3>
          <p className={styles.cvText}>
            Computer Science student at BINUS University with a strong interest in cybersecurity and technology. Experienced in organizational leadership and project coordination, with a proven ability to collaborate across teams, communicate effectively, and manage responsibilities in student organizations.
          </p>
        </div>

        <div className={styles.cvSection}>
          <h3 className={styles.cvSectionTitle}>Technical Skills & Tools</h3>
          <p className={styles.cvText}>
            • <strong>Skills:</strong> Web Application Security Testing, Vulnerability Assessment, Mobile App Security Testing, Threat Modeling, Digital Forensics.<br />
            • <strong>Tools:</strong> Burp Suite, Wireshark, Kali Linux, Docker, Android Studio, FTK Imager, MailView, Jira, Notion, Figma, FigJam.
          </p>
        </div>

        <div className={styles.cvSection}>
          <h3 className={styles.cvSectionTitle}>Key Experience</h3>
          <p className={styles.cvText}>
            • <strong>Manager, Creative & Design</strong> — HIMTI BINUS@Malang (Mar 2026 - Present)<br />
            • <strong>Chief Financial Officer</strong> — BNCC BINUS@Malang (Mar 2026 - Present)<br />
            • <strong>UI/UX Educator</strong> — BNCC BINUS@Malang (Oct 2025 - Apr 2026)
          </p>
        </div>
      </div>
    </div>
  );
}
