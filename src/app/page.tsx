"use client";

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Tools from '@/components/Tools';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CvModal from '@/components/CvModal';
import ProjectModal from '@/components/ProjectModal';
import Toast from '@/components/Toast';
import { Project } from '@/data/portfolioData';

export default function Home() {
  const [isCvModalOpen, setIsCvModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleCopyEmail = () => {
    const email = "nathasa.design@domain.com";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    showToast("Email copied to clipboard: " + email);
  };

  const handleDownloadCv = () => {
    showToast("Downloading Nathasa's CV (PDF)...");
    
    // Create an inline downloadable dummy CV file
    const element = document.createElement("a");
    const file = new Blob(
      [
        `NATHASA — SENIOR DIGITAL PRODUCT & UI/UX DESIGNER\n` +
        `Contact: nathasa.design@domain.com | LinkedIn: https://linkedin.com\n\n` +
        `EXECUTIVE SUMMARY\n` +
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.\n\n` +
        `EXPERIENCE HIGHLIGHTS\n` +
        `- Chief Financial Officer at Bina Nusantara Computer Club (BNCC) (2026 - Present)\n` +
        `- Manager of Creative and Design at HIMTI BINUS University (2026 - Present)\n` +
        `- Coordinator of Design & Documentation (TechnoScape 2026, DIGIFEST 2025, SESVENT 2025)\n` +
        `- UI/UX Trainer & TPM at BNCC (2025 - 2026)\n` +
        `- Freshmen Partner & Leader (FYP B29) at BINUS University (2025 - 2026)\n\n` +
        `KEY ACHIEVEMENTS\n` +
        `- 1st Place Winner FIND IT UI/UX Competition\n` +
        `- Empirical Research on QR Scanners vs Quishing (Accepted for Publication)\n` +
        `- BNCC UI/UX Trainer Praetorian Certificate`
      ],
      { type: "text/plain" }
    );
    element.href = URL.createObjectURL(file);
    element.download = "Nathasa_Portfolio_CV.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <>
      <Navbar
        onOpenCvModal={() => setIsCvModalOpen(true)}
        onCopyEmail={handleCopyEmail}
      />

      <main>
        <Hero
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onCopyEmail={handleCopyEmail}
        />

        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <Experience />

        <Achievements />

        <Tools />

        <Contact
          onOpenCvModal={() => setIsCvModalOpen(true)}
          onCopyEmail={handleCopyEmail}
        />
      </main>

      <Footer onCopyEmail={handleCopyEmail} />

      {/* Interactive Modals & Toast */}
      <CvModal
        isOpen={isCvModalOpen}
        onClose={() => setIsCvModalOpen(false)}
        onDownload={handleDownloadCv}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <Toast message={toastMessage} />
    </>
  );
}
