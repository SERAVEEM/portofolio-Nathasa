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
    const email = "nathasakayesaa@gmail.com";
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    showToast("Email copied to clipboard: " + email);
  };

  const handleDownloadCv = () => {
    showToast("Downloading Nathasa's CV (PDF)...");
    const link = document.createElement("a");
    link.href = `${process.env.NEXT_PUBLIC_BASE_PATH || '/portofolio-Nathasa'}/CV_Nathasa_Bintang_Kayesa.pdf`;
    link.download = "CV_Nathasa_Bintang_Kayesa.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Navbar
        onOpenCvModal={handleDownloadCv}
        onCopyEmail={handleCopyEmail}
      />

      <main>
        <Hero
          onOpenCvModal={handleDownloadCv}
          onCopyEmail={handleCopyEmail}
        />

        <Projects
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <Experience />

        <Achievements />

        <Tools />

        <Contact
          onOpenCvModal={handleDownloadCv}
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
