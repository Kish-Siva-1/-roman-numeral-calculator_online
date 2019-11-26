import React, { Component } from 'react';
import Calculator from './components/Calculator'


class App extends Component {

  render() {

    return (
      <div>
        <div id='heading' align="center" >
        <h1 style={{ color: 'white' }}>Roman Numeral Calculator</h1>
        </div>
        <div className="App" id='wrapper' >
          <Calculator />
        </div>
      </div>
    );
  }

}

export default App;
