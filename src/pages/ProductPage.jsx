import { createContext, useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { AiOutlineHeart } from "react-icons/ai";
import { useParams } from "react-router-dom";
import items from "../components/allData";
import ModalCart from "../components/modalCart";

export const CartContext = createContext();

export default function ProductPage() {
  const { id } = useParams();
  const item = items.filter((item) => item.id === parseInt(id));

  const [image, setImage] = useState(item[0].img);

  const { addToCart } = useContext(CartContext);

  const { show, setShow } = useContext(CartContext);

  const handleMouseOver = (e) => {
    setImage(e.target.src);
  };

  return (
    <>
      <div className="product-page">
        <Container>
          <h1 className="text-center my-5"> Product Detail</h1>
          <Row gap={10}>
            <Col lg={7}>
              <div className="left d-flex flex-column mb-sm-5">
                <div className="main-img w-100 d-flex justify-content-center">
                  <img
                    src={image}
                    alt="product image"
                    className="w-75 h-100 object-cover-fit"
                  />
                </div>
                <div className="alternate-img d-flex justify-content-center mw-19 align-item-center py-3 gap-3 align-self-center">
                  <img
                    src={item[0].img}
                    alt="product image"
                    className="w-100 object-fit-cover h-100"
                    onMouseOver={handleMouseOver}
                  />
                  <img
                    src={item[0].otherImgs[0]}
                    alt="product image"
                    className="w-100 object-fit-cover h-100"
                    onMouseOver={handleMouseOver}
                  />
                  <img
                    src={item[0].otherImgs[1]}
                    alt="product image"
                    className="w-100 object-fit-cover h-100"
                    onMouseOver={handleMouseOver}
                  />
                </div>
              </div>
            </Col>

            <Col lg={5}>
              <div className="right px-5">
                <h2>{item[0].name}</h2>
                <h3>{item[0].subName}</h3>
                <div className="product-spec">
                  <div className="product-des">
                    <p> {item[0].description} </p>
                  </div>
                  <div className="product-detail">
                    <p className=""> Style : {item[0].style} </p>
                    <p className=""> Colorway : {item[0].colorway} </p>
                    {item[0].releaseDate != "" && (
                      <p className=""> Release Date : {item[0].releaseDate} </p>
                    )}
                  </div>
                  <div className="product-act-btn d-flex flex-column gap-3">
                    {/* <Link to="/cart"> */}
                    <Button
                      size="md"
                      name="bag"
                      className="py-3 text-uppercase fw-bold border-0 w-100 add-to-cart-btn"
                      onClick={(e) => {
                        addToCart(item[0], e.target.name);
                        setShow(!show);
                      }}
                    >
                      {" "}
                      Add to Bag{" "}
                    </Button>
                    {/* </Link> */}
                    <Button
                      name="favorite"
                      size="md"
                      className="py-3 text-uppercase fw-bold wishlist-btn "
                      onClick={(e)=>{
                        addToCart(item[0], e.target.name);
                      }}
                    >
                      {" "}
                      Favorite{" "}
                      <AiOutlineHeart size={18} className="mb-1 ms-2" />{" "}
                    </Button>
                    <ModalCart
                      image={image}
                      name={item[0].name}
                      subName={item[0].subName}
                      price={item[0].price}
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
