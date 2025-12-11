import React from "react";
import { Container, Form, Nav, Navbar, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQty = cartItems.reduce((sum, i) => sum + i.qty, 0);

  return (
    <Navbar expand="md" bg="white" className="py-3 shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-3 fw-bold text-danger">
          Tripzy
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Form
            className="d-flex mx-auto my-3 my-md-0 w-100"
            style={{ maxWidth: "600px" }}
          >
            <Form.Control
              type="search"
              placeholder="Search products..."
              className="me-2"
            />
          </Form>

          <Nav className="ms-md-3 d-flex align-items-center gap-4">
            <Link to="/cart" className="text-dark position-relative fs-4">
              <i className="bi bi-cart"></i>
              {totalQty > 0 && (
                <span
                  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                  style={{ fontSize: "12px" }}
                >
                  {totalQty}
                </span>
              )}
            </Link>

            <Button
              as={Link}
              to="/login"
              variant="outline-danger"
              className="px-3"
            >
              Login / Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
