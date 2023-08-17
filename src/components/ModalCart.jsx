import { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CartContext } from "../pages/ProductPage";

function ModalCart({ image, name, subName, price }) {
  const { show, setShow } = useContext(CartContext);

  const handleClose = () => setShow(false);
  //   const handleShow = () => setShow(true);

  //hide modal on interval of 3000ms
  useEffect(() => {
    const hideModal = setTimeout(() => {
      setShow(false);
    }, 3000);
    return () => clearTimeout(hideModal);
  }, []);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <AiFillCheckCircle style={{ color: "green" }} /> Added to bag
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col sm={4}>
                <img
                  src={image}
                  alt="product image"
                  className="w-100 object-fit-cover h-100"
                />
              </Col>
              <Col sm={8}>
                <p>{name}</p>
                <p>{subName}</p>
                <p> ${price}</p>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <div className="button-container w-100 d-flex my-2 gap-2 px-2">
          <Link to="/cart" className="w-100">
            <Button
              size="md"
              className="py-3 text-uppercase fw-bold wishlist-btn w-100 "
            >
              {" "}
              View Bag{" "}
            </Button>
          </Link>
          <Button
            size="md"
            className="py-3 text-uppercase fw-bold border-0 w-100 add-to-cart-btn"
          >
            {" "}
            Checkout
          </Button>
        </div>
        {/* </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default ModalCart;
