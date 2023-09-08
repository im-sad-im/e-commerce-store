import React from "react";
import { items } from "./allData";
import { Link } from "react-router-dom";

export const TrendingItem = () => {
  const filteredItem = items.filter((item) => item.id >= 8);
  return (
    <>
      {filteredItem.map((item) => (
        <div key={item.id} className="row-item">
          <Link to={`/categories/product/${item.id}`}>
            <div className="item-header">
              <img src={item.img} alt="product" style={{width: "15.1rem"}}/>
            </div>
            <div className="item-description">
              <p>{item.name}</p>
              <p className="item-price">{item.price}$</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
