import React, {Component} from 'react';
import './Market.css';
import {Table} from 'react-bootstrap';
import ReactDOM from 'react-dom';

class Market extends Component {
  constructor() {
    super();
    this.state = {
      market: {}
    };

    this.handleClick = this.handleClick.bind(this);
  };

  handleClick() {
    const url = 'https://api.coinmarketcap.com/v2/ticker/?limit=10';

    fetch(url).then(response => response.json()).then(data => this.setState({market: data.data}));
  };

  componentDidUpdate() {
    this.updateTable();
  };

  updateTable() {
    let table = [];
    for (const key in this.state.market) {
      const el = this.state.market[key];
      table.push([el.id, el.name, '$' + el.quotes.USD.price, el.quotes.USD.percent_change_24h + '%', '$' + el.quotes.USD.market_cap, el.quotes.USD.volume_24h]);
    }

    const GenerateTable = ({items}) => {
      return items.map((el, index) => {
        return <tr key={index}>{el.map((item, index) => {
          return <td key={index}>{item}</td>
        })}</tr>
      });
    };

    ReactDOM.render(<GenerateTable items={table}/>, document.getElementById('tbody'));
  };

  componentDidMount() {
    const url = 'https://api.coinmarketcap.com/v2/ticker/?limit=10';

    fetch(url).then(response => response.json()).then(data => this.setState({market: data.data}));
  };

  render() {
    return (
      <div className="Market container">
        <button className='button' onClick={this.handleClick}>
          Click Me
        </button>

        <h1>Market Overview</h1>

        <Table responsive>
          <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th>Price Change (24h)</th>
            <th>Market Cap</th>
            <th>Volume (24h)</th>
          </tr>
          </thead>
          <tbody id="tbody">
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Market;
