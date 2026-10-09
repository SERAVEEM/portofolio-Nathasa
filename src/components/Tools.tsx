"use client";

import React from 'react';
import styles from './Tools.module.css';
import { TOOL_CATEGORIES } from '@/data/portfolioData';
import { WrenchIcon } from './Icons';

export default function Tools() {
  return (
    <section id="tools" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <WrenchIcon />
            <span>Workflow & Arsenal</span>
          </div>
          <h2 className="section-title">Tools I Use</h2>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.
          </p>
        </div>

        {/* 4 Categorized Glassmorphic Cards */}
        <div className={styles.categoriesGrid}>
          {TOOL_CATEGORIES.map((cat) => (
            <div key={cat.title} className={styles.categoryCard}>
              <div className={styles.categoryHeader}>
                <h3 className={styles.categoryTitle}>{cat.title}</h3>
                <span className={styles.categorySubtitle}>{cat.subtitle}</span>
              </div>

              <div className={styles.toolsList}>
                {cat.tools.map((tool) => (
                  <div key={tool.name} className={styles.toolItem}>
                    <div className={styles.toolIcon}>{tool.iconEmoji}</div>
                    <div className={styles.toolInfo}>
                      <span className={styles.toolName}>{tool.name}</span>
                      <span className={styles.toolLevel}>{tool.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
