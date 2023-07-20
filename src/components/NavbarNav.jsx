import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {AiOutlineHeart} from 'react-icons/ai';
import {BiShoppingBag} from 'react-icons/bi';

function NavbarNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100 top-0">
      <Container>
        <Navbar.Brand href="/">e.commerce</Navbar.Brand>
          <div className="acct-btn d-flex align-items-center gap-3  ">
             <AiOutlineHeart size={24} />
            <BiShoppingBag  size={24}/> 
          </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Categories</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarNav;