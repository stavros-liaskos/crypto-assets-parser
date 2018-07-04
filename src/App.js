import React, {Component} from 'react';
import './App.css';
import Header from './Header.js';
import Market from './Market.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Market/>
      </div>
    );
  }
}

export default App;
