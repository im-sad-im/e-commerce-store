import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { AiOutlineHeart } from "react-icons/ai";
import { PiBag } from "react-icons/pi";
import { Link } from "react-router-dom";
import { CartContext } from "../pages/ProductPage";

function NavbarNav() {

  const {cartItem} = useContext(CartContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100 top-0">
      <Container>
        <Navbar.Brand href="/">e.commerce</Navbar.Brand>
        <div className="acct-btn d-flex align-items-center gap-3  ">
          <Link to="/favorite"> <AiOutlineHeart size={24} title="Favorites" /> </Link>
          <div className="position-relative">
            <Link to="/cart">
              {" "}
              <PiBag size={26} title={`Bag items : ${cartItem.length}`}/>
              <span
                className="position-absolute w-100 text-center start-0 visible fw-bold"
                style={{ fontSize: "9px", top: "9px" }}
              >
                {" "}
                {(cartItem.length > 0) && cartItem.length}
              </span>{" "}
            </Link>
          </div>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/categories/all">Categories</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarNav;
