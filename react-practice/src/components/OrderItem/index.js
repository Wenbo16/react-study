import React, { useState } from "react";
import "./style.css";


function OderItem({ data }) {
  const [editing, setEditing] = useState(true);
  const [stars, setStars] = useState(0);

  const clickStarsHandler = (stars) => {
    setStars(stars);
  };

  const { img, productName, description, price, isCommented } = data;

  return (
    <div className="order-item">
      <div className="order-item__img-container">
        <img src={img} alt="" />
      </div>
      <div className="order-item__detail-container">
        <div className="order-item__product">{productName}</div>
        <div className="order-item__description">{description}</div>
        <div className="order-item__price">{price}</div>
        {isCommented ? (
          <button className="order-item__btn order-item__btn--grey">
            已评价
          </button>
        ) : (
          <button className="order-item__btn order-item__btn--red">评价</button>
        )}
      </div>
      <div>
        {editing ? (
          <EditArea stars={stars} clickStarsHandler={clickStarsHandler} />
        ) : null}
      </div>
    </div>
  );
}

export default OderItem;



function EditArea(props) {
  return (
    <div className="order-item__comment-container">
      <textarea className="order-item__comment"></textarea>
      <Stars {...props} />
      <button className="order-item__btn--red">提交</button>
      <button className="order-item__btn--grey">取消</button>
    </div>
  );
}

function Stars({ stars, clickStarsHandler }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((item, index) => {
        const lightClass = stars >= item ? "order-item__star--light" : "";
        return (
          <span
            className={"order-item__star " + lightClass}
            key={index}
            onClick={() => clickStarsHandler(item)}
          >
            &#9733;
          </span>
        );
      })}
    </div>
  );
}