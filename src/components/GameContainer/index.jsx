// src/components/GameContainer/index.jsx
import React from 'react';
import LifeBar from '../common/LifeBar';
import InstructionsPanel from '../InstructionsPanel';
import CakePreview from '../CakePreview';
import CodeEditor from '../CodeEditor';
import NextButton from '../common/NextButton';
import TimeBar from '../TimeBar';
import styles from './GameContainer.module.css';
import { useGameLogic } from '../../hooks/useGameLogic';


const GameContainer = () => {
  const { code, setCode, isCorrect, timeLeft } = useGameLogic(); 
  return (
    <div className={styles.container}>
  <div className={styles.topSection}>
    <InstructionsPanel />
    <div className={styles.previewWrapper}>
      <LifeBar />
      <CakePreview />
      <LifeBar />
    </div>
  </div>

  <div className={styles.bottomSection}>
    <CodeEditor code={code} onChange={setCode} />
  </div>

  <NextButton isEnabled={true} onClick={() => {}} />
</div>

  );
};

export default GameContainer;
