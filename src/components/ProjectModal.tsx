"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Modals.module.css';
import { Project } from '@/data/portfolioData';
import { CloseIcon, ExternalLinkIcon, GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close Case Study"
        >
          <CloseIcon />
        </button>

        <div className={styles.projectModalBanner}>
          <Image
            src={project.image}
            alt={project.title}
            width={900}
            height={500}
            className={styles.projectModalImage}
          />
        </div>

        <div className={styles.projectMetaRow}>
          <span className={styles.projectCategoryTag}>{project.category}</span>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.88rem' }}>Year: {project.year}</span>
        </div>

        {project.statusNote && (
          <div className={styles.modalStatusNote}>
            <span>{project.statusNote}</span>
          </div>
        )}

        <h2 className={styles.projectModalTitle}>{project.title}</h2>
        <p className={styles.projectTagline}>{project.tagline}</p>

        <div className={styles.cvSection}>
          <h3 className={styles.cvSectionTitle}>Overview</h3>
          <p className={styles.cvText}>{project.fullOverview}</p>
        </div>

        <div className={styles.projectStoryGrid}>
          <div className={styles.storyCard}>
            <h4 className={styles.storyTitle}>The Challenge</h4>
            <p className={styles.storyDesc}>{project.challenge}</p>
          </div>

          <div className={styles.storyCard}>
            <h4 className={styles.storyTitle}>The Solution</h4>
            <p className={styles.storyDesc}>{project.solution}</p>
          </div>
        </div>

        <div className={styles.cvSection}>
          <h3 className={styles.cvSectionTitle}>Tools & Technologies</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '8px' }}>
            {project.tools.map((tool) => (
              <span
                key={tool}
                style={{
                  padding: '6px 14px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  color: '#fff',
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '24px' }}>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cvDownloadBtn}
              style={{ textDecoration: 'none' }}
            >
              <GithubIcon />
              <span>View on GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cvDownloadBtn}
              style={{ textDecoration: 'none' }}
            >
              <span>Live Prototype</span>
              <ExternalLinkIcon />
            </a>
          )}
          <button
            type="button"
            style={{
              padding: '10px 20px',
              borderRadius: '9999px',
              background: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#fff',
              fontSize: '0.88rem',
              cursor: 'pointer',
            }}
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
