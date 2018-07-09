import React, {Component} from 'react';
import './App.css';
import Header from './Header.js';
import Market from './Market.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      coins: 100,
    };

    this.updateCoins = this.updateCoins.bind(this)
  };

  updateCoins(e) {
    switch (e) {
      case 3.1:
        this.setState({
          coins: 10,
        });
        break;
      case 3.2:
        this.setState({
          coins: 50,
        });
        break;
      case 3.4:
        // TODO
        this.setState({
          coins: 100,
        });
        break;
      default:
        this.setState({
          coins: 100,
        });
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <Header
          coins={this.state.coins}
          updateCoins={this.updateCoins}/>

        <Market
          coins={this.state.coins}/>
      </div>
    );
  }
}

export default App;
