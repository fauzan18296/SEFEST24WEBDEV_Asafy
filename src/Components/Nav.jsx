import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
    <Navbar fixed="top" expand="lg" bg="dark" data-bs-theme="dark" >
    <Container>
      <Navbar.Brand className="fw-bold fs-4">elegant<span className="nav-brand">.Shoe</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"  />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto nav-links fs-5">
          <Nav.Link className="nav-home fw-semibold" as={Link} to="/">Home</Nav.Link>
          <Nav.Link className="nav-about fw-semibold" as={Link} to="/about">About</Nav.Link>
          <Nav.Link className="nav-comment fw-semibold" as={Link} to="/comment">Comment</Nav.Link>
          <Nav.Link className="nav-comment fw-semibold" as={Link} to="/product">Product</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}
export default Navigation