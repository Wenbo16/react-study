import React, { Component } from "react";
import "./style.css";

const list = [
  {market_size: 71.56069, price: 123.11, my_size: "-"},
  {market_size: 71.56069, price: 123.11, my_size: "-"},
  {market_size: 71.56069, price: 123.11, my_size: "-"},
  {market_size: 71.56069, price: 123.11, my_size: "-"},
	{market_size: 71.56069, price: 123.11, my_size: "-"},
	{market_size: 71.56069, price: 123.11, my_size: "-"},
  {market_size: 71.56069, price: 123.11, my_size: "-"},
  {market_size: 71.56069, price: 123.11, my_size: "-"},
	{market_size: 71.56069, price: 123.11, my_size: "-"},
	{market_size: 71.56069, price: 123.11, my_size: "-"},
  {market_size: 71.56069, price: 123.11, my_size: "-"},
  {market_size: 71.56069, price: 123.11, my_size: "-"},
  {market_size: 71.56069, price: 123.11, my_size: "-"}
];


export default class OrderBook2 extends Component {
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
      <div className="order-book">
				<div className="order-book-header">
					<div className="column">Market Size</div>
					<div className="column">Price (USD)</div>
					<div className="column">My Size</div>
				</div>
				<div className="order-book-body">
					{this.renderContent()}
				</div>
      </div>
			
    );
  }
}

function OrderBookItem({ market_size, price, my_size }) {
  return (
    <div className="order-book-item">
      <div className="column" id="market-size">
        {market_size}
      </div>
      <div className="column" id="price">
        {price}
      </div>
      <div className="column" id="my-size">
        {my_size}
      </div>
    </div>
  );
}
