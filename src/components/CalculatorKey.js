import React from 'react';
import PointTarget from 'react-point'
import romanToArabic from './RomanToArabic';

// export const PointTarget = ReactPoint.PointTarget

class CalculatorKey extends React.Component {

    render() {
      const { onPress, className, ...props } = this.props

      return (
        <PointTarget onPoint={onPress}>
          <button className={`calculator-key ${className}`} {...props}/>
        </PointTarget>
      )
    }
  }
  
  export default CalculatorKey