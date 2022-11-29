import React from 'react';
import CalculatorButton from './CalculatorButton';
import CalculatorInput from './CalculatorInput';
import styles from './Calculator.module.css';

export default class Calculator extends React.PureComponent {
  render() {
    return (
      <div id="calculator" className={styles.calculator}>
        <CalculatorInput />
        <CalculatorButton classn="btnAC " value="AC" />
        <CalculatorButton classn="btnSigns " value="+/-" />
        <CalculatorButton classn="btn% " value="%" />
        <CalculatorButton classn="btn/ " value="÷" />
        <CalculatorButton classn="btn7 " value="7" />
        <CalculatorButton classn="btn8 " value="8" />
        <CalculatorButton classn="btn9 " value="9" />
        <CalculatorButton classn="btn* " value="x" />
        <CalculatorButton classn="btn4 " value="4" />
        <CalculatorButton classn="btn5 " value="5" />
        <CalculatorButton classn="btn6 " value="6" />
        <CalculatorButton classn="btn- " value="-" />
        <CalculatorButton classn="btn1 " value="1" />
        <CalculatorButton classn="btn2 " value="2" />
        <CalculatorButton classn="btn3 " value="3" />
        <CalculatorButton classn="btn+ " value="+" />
        <CalculatorButton classn="btn0 " value="0" />
        <CalculatorButton classn="btn. " value="." />
        <CalculatorButton classn="btn= " value="=" />

      </div>
    );
  }
}
