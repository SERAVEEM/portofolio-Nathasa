"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './Projects.module.css';
import { Project, PROJECTS_DATA, ProjectCategory } from '@/data/portfolioData';
import { ArrowRightIcon, SparklesIcon, GithubIcon } from './Icons';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories: ('All' | ProjectCategory)[] = [
    'All',
    'Cybersecurity',
    'UI/UX Design',
    'Product & Management'
  ];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-tag">
            <SparklesIcon />
            <span>Selected Showcase</span>
          </div>
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            A comprehensive showcase of penetration testing, application security labs, academic research, and user-centered product design.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className={styles.filterContainer}>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat} {cat === 'All' ? `(${PROJECTS_DATA.length})` : ''}
            </button>
          ))}
        </div>

        {/* 12 Projects Responsive Grid */}
        <div className={styles.projectGrid}>
          {filteredProjects.map((project) => (
            <article key={project.id} className={styles.projectCard}>
              <div className={styles.imageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={380}
                  className={styles.projectImage}
                />
                <span className={styles.categoryBadge}>{project.category}</span>
                <span className={styles.yearBadge}>{project.year}</span>
                {project.statusNote && (
                  <span className={styles.statusBadge} title={project.statusNote}>
                    {project.statusNote}
                  </span>
                )}
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>

                <div className={styles.toolsRow}>
                  {project.tools.slice(0, 4).map((tool) => (
                    <span key={tool} className={styles.toolTag}>{tool}</span>
                  ))}
                </div>

                {project.metrics && project.metrics[0] && (
                  <div className={styles.metricsRow}>
                    <span>📈</span>
                    <span>{project.metrics[0]}</span>
                  </div>
                )}

                <div className={styles.cardFooter}>
                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className={styles.viewBtn}
                    aria-label={`View details for ${project.title}`}
                  >
                    <span>View Case Study</span>
                    <ArrowRightIcon />
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.githubCardBtn}
                      aria-label={`View ${project.title} on GitHub`}
                      title="View GitHub Repository"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <GithubIcon />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
