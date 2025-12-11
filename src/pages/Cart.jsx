import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { removeFromCart, updateQty } from "../store/slices/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (items.length === 0) {
    return (
      <Container className="mt-4 text-center">
        <h3>Your Cart is Empty</h3>
        <Link to="/" className="btn btn-danger mt-3">
          Shop Now
        </Link>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h3>Your Cart</h3>

      {items.map((item) => (
        <Row key={item.id} className="border p-3 rounded mb-3">
          <Col md={3}>
            <img
              src={item.images[0]}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Col>

          <Col md={6}>
            <h5>{item.name}</h5>
            <p>₹{item.price}</p>

            <Form.Select
              value={item.qty}
              onChange={(e) =>
                dispatch(
                  updateQty({ id: item.id, qty: Number(e.target.value) })
                )
              }
              style={{ width: "120px" }}
            >
              {[...Array(item.quantity)].map((_, i) => (
                <option key={i + 1}>{i + 1}</option>
              ))}
            </Form.Select>
          </Col>

          <Col md={3} className="text-end">
            <Button
              variant="outline-danger"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </Button>
          </Col>
        </Row>
      ))}

      <h4>Total: ₹{total}</h4>

      <Link to="/checkout" className="btn btn-danger mt-3">
        Proceed to Checkout
      </Link>
    </Container>
  );
}

export default Cart;
