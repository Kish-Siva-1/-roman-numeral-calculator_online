import React from 'react';
import AutoScalingText from './AutoScalingText';
import arabicToRoman from './ArabicToRoman';

class CalculatorDisplay extends React.Component {
  
  render() {

    const { value, ...props } = this.props
    let formattedValue = value

    if (Number.isInteger(parseInt(value, 10))) {
      formattedValue = arabicToRoman(value)
    }

    return (
      <div {...props} className="calculator-display">
        <AutoScalingText>{formattedValue}</AutoScalingText>
      </div>
    )
  
  }
}

export default CalculatorDisplay 