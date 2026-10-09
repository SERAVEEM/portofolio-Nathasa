"use client";

import React from 'react';
import styles from './Achievements.module.css';
import { ACHIEVEMENTS_DATA } from '@/data/portfolioData';
import { TrophyIcon, StarIcon } from './Icons';

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* 4 Metric Stats Counters */}
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>120+</div>
            <div className={styles.statLabel}>Projects Delivered</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>99%</div>
            <div className={styles.statLabel}>Client Satisfaction</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>5+</div>
            <div className={styles.statLabel}>Years Industry Exp</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>14</div>
            <div className={styles.statLabel}>Awards & Nominations</div>
          </div>
        </div>

        {/* 2x2 Glowing Award Badge Cards (Inspired by Landzy reference) */}
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

                <div className={styles.starsRow} aria-label="5 out of 5 stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <StarIcon key={i} />
                  ))}
                </div>

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
