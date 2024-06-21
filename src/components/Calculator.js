// src/components/Calculator.js
import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';
import ConfettiExplosion from 'react-confetti-explosion';
import '../styles/Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [confetti, setConfetti] = useState(false);

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult);
        if (input.includes('5') && input.includes('6')) {
          setConfetti(true);
          setTimeout(() => setConfetti(false), 3000);
        }
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'AC') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <Display input={input} result={result} />
      {confetti && <ConfettiExplosion />}
      <div className="buttons">
        {['(', ')', 'mc', 'm+', 'm-', 'mr', 'C', '%', '÷', '7', '8', '9', '×', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=', 'sin', 'cos', 'tan', 'log'].map((buttonValue) => (
          <Button key={buttonValue} value={buttonValue} onClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
