import { useContext } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import img3 from "../assets/img/header/clothing.jpg";
import img1 from "../assets/img/header/header.jpg";
import img2 from "../assets/img/header/sneaker.jpg";
import { CartContext } from "../pages/ProductPage";
import { Featured } from "./Featured";

export const Hero = () => {

  const { setTitleName} = useContext(CartContext);
  return (
    <div className="hero-container pb-5">
      <Container>
        <Row className="gx-2">
          <Col lg={6} sm={4}>
            <Link to="/categories/sneaker" onClick={()=>{setTitleName("Sneakers")}}>
              <Featured className="grid-one" image={img1} title={"Sneakers"} />
            </Link>
          </Col>
          <Col lg={3} sm={4}>
            <Link to="/categories/accessories"  onClick={()=>{setTitleName("Accesories")}}>
              <Featured image={img2} title={"Accesories"} />
            </Link>
          </Col>
          <Col lg={3} sm={4}>
            <Link to="/categories/allclothing"  onClick={()=>{setTitleName("AllClothing")}}>
              <Featured image={img3} title={"AllClothing"} />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
