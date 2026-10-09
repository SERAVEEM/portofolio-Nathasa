"use client";

import React from 'react';
import styles from './Experience.module.css';
import { EXPERIENCE_DATA } from '@/data/portfolioData';
import { BriefcaseIcon } from './Icons';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <BriefcaseIcon />
            <span>Career Journey</span>
          </div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Organizational leadership, design coordination, training delivery, and student mentorship across technology organizations.
          </p>
        </div>

        <div className={styles.timelineContainer}>
          <div className={styles.timelineRail} />

          {EXPERIENCE_DATA.map((item) => (
            <div key={item.id} className={styles.timelineItem}>
              <div className={styles.timelineNode} />

              <div className={styles.timelineCard}>
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.roleTitle}>{item.role}</h3>
                    <div className={styles.companyRow}>
                      <span className={styles.companyName}>{item.company}</span>
                      <span className={styles.locationText}>• {item.location}</span>
                    </div>
                  </div>

                  <span className={styles.periodBadge}>{item.period}</span>
                </div>

                <p className={styles.itemDesc}>{item.description}</p>

                <ul className={styles.bulletsList}>
                  {item.achievements.map((bullet, idx) => (
                    <li key={idx} className={styles.bulletItem}>
                      <span className={styles.bulletDot} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.skillsRow}>
                  {item.skills.map((skill) => (
                    <span key={skill} className={styles.skillPill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
