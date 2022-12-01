import React from 'react';
import CalculatorButton from './CalculatorButton';
import CalculatorInput from './CalculatorInput';
import styles from './Calculator.module.css';
import calculate from '../logic/calculate';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const element = calculate(this.state, event.target.innerHTML);
    this.setState(element);
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div id="calculator" className={styles.calculator}>
        <CalculatorInput value={`${total} ${next} ${operation}`} />
        <CalculatorButton onClick={this.handleClick} classn="btnAC " value="AC" />
        <CalculatorButton onClick={this.handleClick} classn="btnSigns " value="+/-" />
        <CalculatorButton onClick={this.handleClick} classn="btn% " value="%" />
        <CalculatorButton onClick={this.handleClick} classn="btn/ " value="÷" />
        <CalculatorButton onClick={this.handleClick} classn="btn7 " value="7" />
        <CalculatorButton onClick={this.handleClick} classn="btn8 " value="8" />
        <CalculatorButton onClick={this.handleClick} classn="btn9 " value="9" />
        <CalculatorButton onClick={this.handleClick} classn="btn* " value="x" />
        <CalculatorButton onClick={this.handleClick} classn="btn4 " value="4" />
        <CalculatorButton onClick={this.handleClick} classn="btn5 " value="5" />
        <CalculatorButton onClick={this.handleClick} classn="btn6 " value="6" />
        <CalculatorButton onClick={this.handleClick} classn="btn- " value="-" />
        <CalculatorButton onClick={this.handleClick} classn="btn1 " value="1" />
        <CalculatorButton onClick={this.handleClick} classn="btn2 " value="2" />
        <CalculatorButton onClick={this.handleClick} classn="btn3 " value="3" />
        <CalculatorButton onClick={this.handleClick} classn="btn+ " value="+" />
        <CalculatorButton onClick={this.handleClick} classn="btn0 " value="0" />
        <CalculatorButton onClick={this.handleClick} classn="btn. " value="." />
        <CalculatorButton onClick={this.handleClick} classn="btn= " value="=" />

      </div>
    );
  }
}
