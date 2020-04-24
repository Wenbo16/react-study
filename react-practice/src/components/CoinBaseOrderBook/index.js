import React, { Component } from "react";
import "./style.css";

// Helper function to get an orderbook
let globalSize = 1
const getNewOrder = () => {
	const id = parseInt( Math.random() * 100000); // simulate random ID
	const size = globalSize + Math.random().toPrecision(4)
	globalSize = globalSize + 1;
	const price = 5000 + (Math.random().toPrecision(4) * 100)
	return { id, price, size }
}

class CoinBaseOrderBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    }
  }
  
  onClickHandler = () => {
    let orders = this.state.orders;
    
    if(orders.length >= 4) return;
    const order = getNewOrder();

    this.setState({orders: [...orders, order]});
  }
  
  removeOrder = function() {
    // const orders = this.state.orders;
    // orders.shift()
    // this.setState({orders: orders});
  }

  
  render() {
    // setInterval(this.removeOrder, 2000)

    const orders = this.state.orders;
    const orderList = orders.map(order => (
      <OderBookItem 
        size={order.size}
        price={order.price}
      />
    ))
    return (
      <div className="order-book-list">
        <button className="btn" onClick={this.onClickHandler}>BUY</button>
        {orderList}
      </div>
    )
  }
}

function OderBookItem({ size, price }) {
  return (
    <div className="row">
        <div className="column" id="size">{size}</div>
        <div className="column" id="price">{price}</div>
     </div>
  )
}

export default CoinBaseOrderBook;
