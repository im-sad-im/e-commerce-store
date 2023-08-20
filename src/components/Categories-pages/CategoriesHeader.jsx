import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";

export default function CategoriesHeader() {
  const [titleName, setTitleName] = useState("All");

  const handleTitleName = (e) => {
    setTitleName(e);
  };
  return (
    <Container className="pt-5 mt-5">
      <div className="catego-header d-flex flex-column ">
        <div className="title-home d-flex w-100 align-items-center pb-5">
          <Link to="/"> Home</Link>
          <h3 className="text-center text-uppercase mx-auto">{titleName}</h3>
        </div>
        <div className="filter-buttons w-100 d-flex align-items-center gap-3 justify-content-center">
          <Link to="/categories/all" onClick={() => handleTitleName("All")}>
            <span>All</span>
          </Link>
          <Link
            to="/categories/allclothing"
            onClick={() => handleTitleName("allclothing")}
          >
            <span>allclothing</span>
          </Link>
          <Link
            to="/categories/sneaker"
            onClick={() => handleTitleName("sneakers")}
          >
            <span>sneakers</span>
          </Link>
          <Link
            to="/categories/accessories"
            onClick={() => handleTitleName("accessories")}
          >
            <span>accessories</span>
          </Link>
        </div>
      </div>
    </Container>
  );
}
