// src/components/TimerBar/index.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './TimeBar.module.css';

const TimeBar = ({ timeLeft }) => (
  <div className={styles.timeBar} style={{ width: `${timeLeft}%` }} />
);

TimeBar.propTypes = {
  timeLeft: PropTypes.number.isRequired,
};

export default TimeBar;