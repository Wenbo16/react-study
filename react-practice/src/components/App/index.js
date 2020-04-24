import React from "react";
import OrderList from "../OrderList";
import TodoList from "../TodoList";
// import OrderBook from "../OrderBook";
import OrderBook2 from "../OrderBook2";
import CoinBaseOrderBook from "../CoinBaseOrderBook";

import "./style.css";

function App() {
  return (
    <div className="App">
      <OrderList />
      <TodoList />
      {/* <OrderBook /> */}
      <CoinBaseOrderBook />
    </div>
  );
}

export default App;
