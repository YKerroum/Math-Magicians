import React from 'react';
import PropTypes from 'prop-types';
import styles from './Calculator.module.css';

class CalculatorButton extends React.PureComponent {
  render() {
    const { value } = this.props;
    let { classn } = this.props;
    const signs = ['btn* ', 'btn- ', 'btn+ ', 'btn/ ', 'btn= '];
    if (signs.indexOf(classn) >= 0) classn += styles.sidebtn;
    if (classn === 'btn0 ') classn += styles.zerobtn;
    return <button type="button" className={classn}>{value}</button>;
  }
}
CalculatorButton.propTypes = {
  classn: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default CalculatorButton;
