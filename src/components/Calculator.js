import React, { useState } from 'react';
import CalculatorButton from './CalculatorButton';
import CalculatorInput from './CalculatorInput';
import styles from './Calculator.module.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [object, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const { total, next, operation } = object;
  const handleClick = (e) => {
    const elements = calculate(object, e.target.innerHTML);
    setState(elements);
  };

  return (
    <div id="calculator" className={styles.calculator}>
      <CalculatorInput value={`${total || ''} ${operation || ''} ${next || ''}`} />
      <CalculatorButton onClick={handleClick} classn="btnAC " value="AC" />
      <CalculatorButton onClick={handleClick} classn="btnSigns " value="+/-" />
      <CalculatorButton onClick={handleClick} classn="btn% " value="%" />
      <CalculatorButton onClick={handleClick} classn="btn/ " value="÷" />
      <CalculatorButton onClick={handleClick} classn="btn7 " value="7" />
      <CalculatorButton onClick={handleClick} classn="btn8 " value="8" />
      <CalculatorButton onClick={handleClick} classn="btn9 " value="9" />
      <CalculatorButton onClick={handleClick} classn="btn* " value="x" />
      <CalculatorButton onClick={handleClick} classn="btn4 " value="4" />
      <CalculatorButton onClick={handleClick} classn="btn5 " value="5" />
      <CalculatorButton onClick={handleClick} classn="btn6 " value="6" />
      <CalculatorButton onClick={handleClick} classn="btn- " value="-" />
      <CalculatorButton onClick={handleClick} classn="btn1 " value="1" />
      <CalculatorButton onClick={handleClick} classn="btn2 " value="2" />
      <CalculatorButton onClick={handleClick} classn="btn3 " value="3" />
      <CalculatorButton onClick={handleClick} classn="btn+ " value="+" />
      <CalculatorButton onClick={handleClick} classn="btn0 " value="0" />
      <CalculatorButton onClick={handleClick} classn="btn. " value="." />
      <CalculatorButton onClick={handleClick} classn="btn= " value="=" />

    </div>
  );
};

export default Calculator;
