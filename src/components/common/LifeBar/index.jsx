// src/components/common/LifeBar/index.jsx
import React from 'react';
import styles from './LifeBar.module.css';
import heartImage from '../../../assets/pixel-heart.png'

const LifeBar = () => (
  <div className={styles.lifeBar}>
    {[...Array(5)].map((_, i) => (
      <img 
      key={i}
      src={heartImage}
      alt="Heart"
      className={styles.heart}
    />
    ))}
  </div>
);


export default LifeBar; 