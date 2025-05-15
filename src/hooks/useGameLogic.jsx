// src/hooks/useGameLogic.js
import { useState, useEffect } from 'react';
import { initialCSS, requiredCSS, INITIAL_TIME } from '../constants';

export const useGameLogic = () => {
  const [code, setCode] = useState(initialCSS);
  const [isCorrect, setIsCorrect] = useState(false);
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const matches = requiredCSS.every((req) => code.includes(req));
    setIsCorrect(matches);
  }, [code]);

  return { code, setCode, isCorrect, timeLeft };
};