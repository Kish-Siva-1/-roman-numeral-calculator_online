import React, { Component } from 'react';
import Calculator from './components/Calculator'
import * as firebase from "firebase/app";

class App extends Component {

  componentDidMount() {
    //this will get some net nanny to warn me but there's no good way to hide the api key on the client.
    //https://stackoverflow.com/questions/52100690/should-i-hide-firebase-api-keys-into-backend-not-due-to-data-security-but-proje
    const firebaseConfig = {
      apiKey: "AIzaSyDTz4n7O04wXdES9UoSrNa8AQ29TCe_3bk",
      authDomain: "roman-num-calc-online.firebaseapp.com",
      databaseURL: "https://roman-num-calc-online.firebaseio.com",
      projectId: "roman-num-calc-online",
      storageBucket: "roman-num-calc-online.appspot.com",
      messagingSenderId: "1061793863091",
      appId: "1:1061793863091:web:a9d2cf90a5a689caf6e7c6"
    };

    firebase.initializeApp(firebaseConfig);

  }

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
