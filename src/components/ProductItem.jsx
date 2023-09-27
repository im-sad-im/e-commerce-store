import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import Product from "./Product";
import items from "./allData";

export default function ProductItem() {
  return (
    <>
      <Container className="mt-5">
        <Row className="gy-4">
          {items.map((item) => {
            return (
              <Col key={item.id} lg={3} md={4} sm={6} xs={6}>
                <Link
                  key={item.id}
                  onClick={() => {
                    window.scrollTo(0, 0);
                  }}
                  to={`/categories/product/${item.id}`}
                >
                  <Product
                    img={item.img}
                    title={item.name}
                    subTitle={item.subName}
                    price={item.price}
                    id={item.id}
                  />
                </Link>{" "}
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
