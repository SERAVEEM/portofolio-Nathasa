"use client";

import React from 'react';
import styles from './Modals.module.css';
import { CheckIcon } from './Icons';

interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  if (!message) return null;

  return (
    <div className={styles.toastWrapper}>
      <div className={styles.toastBox}>
        <div className={styles.toastIcon}>
          <CheckIcon />
        </div>
        <span>{message}</span>
      </div>
    </div>
  );
}
