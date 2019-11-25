import React, { Component } from 'react';
import Calculator from './components/Calculator'


class App extends Component {

  render(){ 

    return (
      <div className="App" id='wrapper' >     
          <Calculator />
      </div>
    );
  }  

}

export default App;
