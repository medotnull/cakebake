// src/components/InstructionsPanel/index.jsx
import React from 'react';
import styles from './InstructionsPanel.module.css';

const InstructionsPanel = () => (
  <aside className={styles.instructions}>
    <h2 className={styles.headline}>Instructions</h2>
    <p>Make a round cake with pink batter</p>
  </aside>
);

export default InstructionsPanel;