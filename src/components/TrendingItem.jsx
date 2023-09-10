import React from "react";
import { items } from "./allData";
import { Link } from "react-router-dom";

export const TrendingItem = () => {
  const filteredItem = items.filter((item) => item.id >= 8);
  return (
    <>
      {filteredItem.map((item) => (
        <div key={item.id} className="product-item">
          <Link to={`/categories/product/${item.id}`}>
            <div className="item-header">
              <img src={item.img} alt="product" style={{width: "15.1rem"}}/>
            </div>
            <div className="product-title px-2">
              <p>{item.name}</p>
              <p className="product-price fw-bold">{item.price}$</p>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};
