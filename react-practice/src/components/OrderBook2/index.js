import React, { Component, useEffect } from "react";
import "./style.css";

const list = [
  {id: 0, market_size: 71.56069, price: 123.11, my_size: "-"},
  {id: 1, market_size: 71.56069, price: 123.11, my_size: "-"},
  {id: 2, market_size: 71.56069, price: 123.11, my_size: "-"},
  {id: 3, market_size: 71.56069, price: 123.11, my_size: "-"},
	{id: 4, market_size: 71.56069, price: 123.11, my_size: "-"},
];


export default class OrderBook2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      id: -1,
    }
  }

  disappear = (id) => {
    const list = this.state.list.filter(i => i.id !== id);
    this.setState({list})
  }

	renderContent = () => {
    return this.state.list.map((i, idx) => (
      <OrderBookItem 
        market_size={i.market_size}
        price={i.price}
        my_size={i.my_size}
        key={idx}
        disappear={() => this.disappear(i.id)}
      />
    ))
	}
  
  addOrder = () => {
    const id = this.state.id + 1;
    const list = this.state.list;
    list.push({id, market_size: 71.56069, price: 123.11, my_size: "-"});
    console.log(list)
    this.setState({list, id})
  }

  render() {
    return (
      <div className="order-book">
        <button onClick={this.addOrder}>Add</button>
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

function OrderBookItem({ market_size, price, my_size, disappear}) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      disappear();
    }, 3000);
    // return function() {
    //   clearTimeout(timeout)
    // };
  }, []);
  
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
