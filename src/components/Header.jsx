import React from "react";
import { Container, Form, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar expand="md" bg="white" className="py-3 shadow-sm">
      <Container>
        
        <Navbar.Brand as={Link} to="/" className="fs-3 fw-bold text-danger">
          Tripzy
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">

          <Form className="d-flex mx-auto my-3 my-md-0 w-100" style={{ maxWidth: "600px" }}>
            <Form.Control
              type="search"
              placeholder="Search products..."
              className="me-2"
            />
          </Form>

          <Nav className="ms-md-3 text-center text-md-end">
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
