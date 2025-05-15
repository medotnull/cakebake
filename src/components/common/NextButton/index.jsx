// src/components/common/Button/index.jsx
import React from 'react';
import styles from './NextButton.module.css';
import PropTypes from 'prop-types';
import nextIcon from '../../../assets/next.png';

const NextButton = ({ isEnabled, onClick }) => (
  <button 
    className={styles.nextButton}
    onClick={onClick}
    disabled={!isEnabled}
  >
    <img 
      src={nextIcon} 
      alt="Next Level" 
      className={styles.buttonImage}
    />
  </button>
);

NextButton.propTypes = {
  isEnabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NextButton;