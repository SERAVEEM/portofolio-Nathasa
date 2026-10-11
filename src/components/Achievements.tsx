"use client";

import React from 'react';
import styles from './Achievements.module.css';
import { ACHIEVEMENTS_DATA, STATS_DATA } from '@/data/portfolioData';
import { TrophyIcon } from './Icons';

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <TrophyIcon />
            <span>Honors & Recognition</span>
          </div>
          <h2 className="section-title">Key Achievements</h2>
          <p className="section-subtitle">
            Demonstrated impact, academic honors, and competitive distinctions across UI/UX and Cybersecurity.
          </p>
        </div>

        {/* 4 Metric Stats Counters */}
        <div className={styles.statsGrid}>
          {STATS_DATA.map((stat, idx) => (
            <div key={idx} className={styles.statCard}>
              <div className={styles.statNumber}>{stat.number}</div>
              <div className={styles.statLabel}>{stat.label}</div>
              <p className={styles.statDesc}>{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Award Badge Cards */}
        <div className={styles.awardsGrid}>
          {ACHIEVEMENTS_DATA.map((item) => (
            <div key={item.id} className={styles.awardCard}>
              <div className={styles.awardTop}>
                <div className={styles.badgeIconWrapper}>
                  <TrophyIcon />
                </div>
                <span className={styles.verifiedTag}>{item.badge}</span>
              </div>

              <div className={styles.awardBody}>
                <h3 className={styles.awardTitle}>{item.title}</h3>
                <div className={styles.organizationRow}>{item.organization}</div>
                <p className={styles.awardDesc}>{item.description}</p>
              </div>

              <div className={styles.awardFooter}>
                <span>Verified Recognition</span>
                <span>{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
