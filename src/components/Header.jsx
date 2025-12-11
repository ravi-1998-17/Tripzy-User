import React from "react";
import { Container, Form, Nav, Navbar, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../store/slices/authSlice";

function Header() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalQty = cartItems.reduce((sum, i) => sum + i.qty, 0);

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const email = useSelector((state) => state.auth.email);

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

            {token ? (
              <>
                <span className="me-3 fw-semibold">{email}</span>
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    dispatch(logout());
                    navigate("/login");
                  }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <Button as={Link} to="/login" variant="outline-danger">
                Login / Register
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
