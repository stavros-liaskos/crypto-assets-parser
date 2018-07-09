import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import ReactDOM from 'react-dom';

class Market extends Component {
  updateTable() {
    const url = 'https://api.coinmarketcap.com/v2/ticker/?limit=' + this.props.coins;

    fetch(url).then(response => response.json()).then(data => {
      let table = [];
      for (const key in data.data) {
        const el = data.data[key];
        table.push([
          el.id, el.name,
          '$' + (el.quotes.USD.price).toLocaleString('en-GB'),
          el.quotes.USD.percent_change_24h + '%',
          '$' + (el.quotes.USD.market_cap).toLocaleString('en-GB'),
          (el.quotes.USD.volume_24h).toLocaleString('en-GB')
        ]);
      }

      const GenerateTable = ({items}) => {
        return items.map((el, index) => {
          return <tr key={index}>{el.map((item, index) => {
            return <td key={index}>{item}</td>
          })}</tr>
        });
      };

      ReactDOM.render(<GenerateTable items={table}/>, document.getElementById('tbody'));
    });

  };

  componentDidUpdate() {
    this.updateTable();
  };

  componentDidMount() {
    this.updateTable();
  };

  render() {
    return (
      <div className="Market container">
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
