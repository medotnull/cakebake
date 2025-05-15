// src/components/CakePreview/index.jsx
import React from 'react';
import PropTypes from 'prop-types';
import styles from './CakePreview.module.css';

const CakePreview = ({ isCorrect }) => (
  <div className={styles.cakeContainer}>
    <div 
      className={styles.cake}
      style={{
        backgroundColor: isCorrect ? '#ff99cc' : '#eee',
        borderRadius: isCorrect ? '50%' : '0'
      }}
    >
      {/* Optional decorative elements */}
      <div className={styles.sparkles}></div>
    </div>
  </div>
);

CakePreview.propTypes = {
  isCorrect: PropTypes.bool.isRequired,
};

export default CakePreview;