// src/components/PreviewArea/index.jsx
import React from 'react';
import PropTypes from 'prop-types';
import LifeBar from '../common/LifeBar';
import CakePreview from '../CakePreview';
import TimerBar from '../TimeBar';
import styles from './PreviewArea.module.css';

const PreviewArea = ({ isCorrect, timeLeft }) => (
  <main className={styles.previewArea}>
    <LifeBar />
    <CakePreview isCorrect={isCorrect} />
    <TimerBar timeLeft={timeLeft} />
  </main>
);

PreviewArea.propTypes = {
  isCorrect: PropTypes.bool.isRequired,
  timeLeft: PropTypes.number.isRequired,
};

export default PreviewArea;