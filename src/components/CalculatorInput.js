import React from 'react';
import PropTypes from 'prop-types';
import styles from './Calculator.module.css';

class CalculatorInput extends React.PureComponent {
render=() => {
  const { value } = this.props;
  return <input type="text" className={styles.input} value={value} />;
}
}
CalculatorInput.defaultProps = { value: '0' };
CalculatorInput.propTypes = { value: PropTypes.string };

export default CalculatorInput;
