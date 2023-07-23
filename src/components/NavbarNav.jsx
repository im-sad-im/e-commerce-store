import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {AiOutlineHeart} from 'react-icons/ai';
// import {BiShoppingBag} from 'react-icons/bi';
import {PiBag} from 'react-icons/pi';

function NavbarNav() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary position-fixed w-100 top-0">
      <Container>
        <Navbar.Brand href="/">e.commerce</Navbar.Brand>
          <div className="acct-btn d-flex align-items-center gap-3  ">
             <AiOutlineHeart size={24} />
             <div className='position-relative'>
            <PiBag  size={26}/> 
            <span className='position-absolute w-100 text-center start-0 visible fw-bold' style={{fontSize: "9px", top: "9px"}}> 1</span>
             </div>
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