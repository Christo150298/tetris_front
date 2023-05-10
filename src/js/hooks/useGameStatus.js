import { useState, useEffect, useCallback, useMemo } from 'react';


export const useGameStatus = rowsCleared => {
  const [score, setScore] = useState(0);
  const [rows, setRows] = useState(0);
  const [level, setLevel] = useState(0);
  const [time, setTime] = useState(0)
  const [pause ,setPause] = useState(true)

  const linePoints = useMemo(() => [40, 100, 300, 1200], []);

  useEffect(() => {
    if (pause) return;

    const tiempo = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(tiempo);
  }, [pause]);

  const handlePause = () => {
    setPause(prev => !prev)
  }
  const handleResetTimer = () => {
    setTime(0)
    setPause(false)
  }

  const calcScore = useCallback(() => {
    // We have score
    if (rowsCleared > 0) {
      // This is how original Tetris score is calculated
      setScore(prev => prev + linePoints[rowsCleared - 1] * (level + 1));
      setRows(prev => prev + rowsCleared);
    }
  }, [level, linePoints, rowsCleared]);

  useEffect(() => {
    calcScore();
  }, [ rowsCleared ]);

  return {score, setScore, rows, setRows, level, setLevel, time, handlePause, pause , handleResetTimer};
};
