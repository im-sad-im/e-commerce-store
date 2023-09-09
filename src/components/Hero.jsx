import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import img3 from "../assets/img/header/clothing.jpg";
import img1 from "../assets/img/header/header.jpg";
import img2 from "../assets/img/header/sneaker.jpg";
import { Featured } from "./Featured";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero-container">
      <Container>
        <Row className="gx-2">
          <Col lg={6}>
            <Link to="/categories/sneaker">
              <Featured className="grid-one" image={img1} title={"Sneakers"} />
            </Link>
          </Col>
          <Col lg={3}>
            <Link to="/categories/accessories">
              <Featured image={img2} title={"Accesories"} />
            </Link>
          </Col>
          <Col lg={3}>
            <Link to="/categories/allclothing">
              <Featured image={img3} title={"AllClothing"} />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
