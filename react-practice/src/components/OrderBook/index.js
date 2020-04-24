import React, { Component } from "react";
import './style2.css';


const list = [
  {market_size: 71.56069, price: 123.11, my_size: "-"},
  {market_size: 71.56069, price: 123.11, my_size: "-"},
  {market_size: 71.56069, price: 123.11, my_size: "-"},
  {market_size: 71.56069, price: 123.11, my_size: "-"},
  {market_size: 71.56069, price: 123.11, my_size: "-"}
];


export default class OrderBook extends Component {
  renderContent = () => {
    return list.map((i, idx) => (
      <OrderBookItem 
        market_size={i.market_size}
        price={i.price}
        my_size={i.my_size}
        key={idx}
      />
    ))
  }

  render() {
    return (
      <div className="order-book-container">
        <table  className="order-book-table">
          <thead className="order-book-header">
            <tr>
              <th>Market Size</th>
              <th>Price (USD)</th>
              <th>My Size</th>
            </tr>
          </thead>
          <tbody className="order-book-body">
            {this.renderContent()}
          </tbody>
        </table>
      </div>
    );
  }
}

function OrderBookItem({ market_size, price, my_size }) {
    return (
      <tr>
        <td>{market_size}</td>
        <td>{price}</td>
        <td>{my_size}</td>
      </tr>
    );
}
