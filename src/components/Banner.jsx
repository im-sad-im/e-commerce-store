import React from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export const Banner = ({customClassName,title, description, img}) => {
  return (
    <section className="banner p-5">
      <Container>
        <Row className={`${customClassName}`}> 
          <Col lg={6} className="px-0">
            <div className="banner-left w-100 h-100 d-flex justify-content-center align-items-center">
              <div className="banner-content px-5">
                <h3>{title}</h3>
                <p>{description}</p>
                <Link to="categories/all">
                  <Button
                    variant="dark"
                    size="md"
                    className="py-2 px-4 text-uppercase fw-bold border-0"
                  >
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </Col>
          <Col lg={6} className="px-0">
            <div className="banner-image">
              <img src={img} alt="banner image" className="w-100 h-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
