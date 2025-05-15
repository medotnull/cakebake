// src/App.jsx
import React, { useEffect } from "react";
import { useGameLogic } from "./hooks/useGameLogic";
import GameContainer from "./components/GameContainer";
import InstructionsPanel from "./components/InstructionsPanel";
import PreviewArea from "./components/PreviewArea";
import EditorArea from "./components/EditorArea";
import NextButton from "./components/common/NextButton/index";
import styles from "./App.module.css";  
import './App.css';


export default function App() {
  const { code, setCode, isCorrect, timeLeft } = useGameLogic();

  useEffect(() => {
    const handleError = (e) => {
      if (e.message.includes('ResizeObserver')) e.preventDefault();
    };
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return (
    <div className={styles.appBackground}>
  <GameContainer>
  <div className={styles.contentSection}>

    <InstructionsPanel />
    <div className={styles.editorPreviewWrapper}>
      <EditorArea code={code} setCode={setCode} />
      <PreviewArea isCorrect={isCorrect} timeLeft={timeLeft} />
    </div>
  </div>
  <NextButton isEnabled={true} onClick={() => {}} />
  </GameContainer>
</div>
  );
}