import React, { Component } from "react";
import OderItem from "../OrderItem";

const data = [
  {
    id: 0,
    img: "/assets/images/pink_drink.jpg",
    productName: "元気森林 白桃味气泡水 480 毫升",
    description: "现象级饮品，小红书推荐，0糖0脂0卡",
    price: "1.99",
    isCommented: true
  },
  {
    id: 1,
    img: "/assets/images/pie.jpg",
    productName: "【稻香村】牛舌饼 360 克",
    description: "",
    price: "5.49",
    isCommented: false
  }
];

export default function OrderList() {
  const orderList = data.map(order => <OderItem key={order.id} data={order} />);
  return <div className="order-list">{orderList}</div>;
}
