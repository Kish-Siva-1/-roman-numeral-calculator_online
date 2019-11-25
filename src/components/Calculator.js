import React from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorKey from './CalculatorKey';
import CalculatorOperations from './CalculatorOperations'
import './CalculatorStyling.css'
import romanToArabic from './RomanToArabic';

class Calculator extends React.Component {
  state = {
    value: null,
    displayValue: '',
    operator: null,
    waitingForOperand: false
  };
  
  clearAll() {
    this.setState({
      value: null,
      displayValue: '',
      operator: null,
      waitingForOperand: false
    })
  }

  clearDisplay() {
    this.setState({
      displayValue: ''
    })
  }
  
  clearLastChar() {
    const { displayValue } = this.state
    
    this.setState({
      displayValue: displayValue.substring(0, displayValue.length - 1) || ''
    })
  }
  
  toggleSign() {
    const { displayValue } = this.state
    const newValue = parseFloat(displayValue) * -1
    
    this.setState({
      displayValue: String(newValue)
    })
  }
  
  inputDigit(digit) {
    
    const { displayValue, waitingForOperand } = this.state
 
    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      })
    } else {
      this.setState({
        displayValue: displayValue === '' ? String(digit) : displayValue + digit
      })
    }
  }
  
  performOperation(nextOperator) {    
    const { value, displayValue, operator } = this.state

    const inputValue = romanToArabic(displayValue)   
   
    if (inputValue === false) {
 
      alert("Please input a valid Roman Numeral")

      this.clearDisplay()

    }

    else {
 
    const currentValue = romanToArabic(value) || 0 
    
    if (value == null) {
      this.setState({
        value: inputValue
      })
    } else if (operator) {

      const newValue = CalculatorOperations[operator](currentValue, inputValue)
      
      this.setState({
        value: newValue,
        displayValue: String(newValue)
      })
    }
    
    this.setState({
      waitingForOperand: true,
      operator: nextOperator
    })
  
  }

  }
  
  handleKeyDown = (event) => {
    let { key } = event
    
    if (key === 'Enter')
      key = '='
    
    if ((/\d/).test(key)) {
      event.preventDefault()
      this.inputDigit(parseInt(key, 10))
    } else if (key in CalculatorOperations) {
      event.preventDefault()
      this.performOperation(key)
    } else if (key === 'Backspace') {
      event.preventDefault()
      this.clearLastChar()
    } else if (key === 'Clear') {
      event.preventDefault()
      
      if (this.state.displayValue !== '') {
        this.clearDisplay()
      } else {
        this.clearAll()
      }
    }
  };
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown)
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown)
  }
  
  render() {
    const { displayValue } = this.state
    
    const clearDisplay = displayValue !== ''
    const clearText = clearDisplay ? 'C' : 'AC'
    
    return (
      <div className="calculator">
        <CalculatorDisplay value={displayValue}/>
        <div className="calculator-keypad">
          <div className="input-keys">
            <div className="function-keys">
              <CalculatorKey className="key-clear" onPress={() => clearDisplay ? this.clearDisplay() : this.clearAll()}>{clearText}</CalculatorKey>
            </div>
            <div className="digit-keys">
              <CalculatorKey className="key-1" onPress={() => this.inputDigit('I')}>I</CalculatorKey>
              <CalculatorKey className="key-2" onPress={() => this.inputDigit('V')}>V</CalculatorKey>
              <CalculatorKey className="key-3" onPress={() => this.inputDigit('X')}>X</CalculatorKey>
              <CalculatorKey className="key-4" onPress={() => this.inputDigit('L')}>L</CalculatorKey>
              <CalculatorKey className="key-5" onPress={() => this.inputDigit('C')}>C</CalculatorKey>
              <CalculatorKey className="key-6" onPress={() => this.inputDigit('D')}>D</CalculatorKey>
              <CalculatorKey className="key-7" onPress={() => this.inputDigit('M')}>M</CalculatorKey>
            </div>
          </div>
          <div className="operator-keys">
            <CalculatorKey className="key-add" onPress={() => this.performOperation('+')}>+</CalculatorKey>
            <CalculatorKey className="key-equals" onPress={() => this.performOperation('=')}>=</CalculatorKey>
          </div>
        </div>
      </div>
    )
  }
}

export default Calculator

  