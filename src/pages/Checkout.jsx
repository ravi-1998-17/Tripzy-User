import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/slices/cartSlice";
import { Container, Button } from "react-bootstrap";

function Checkout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const address = useSelector((state) => state.address.selectedAddress);

  const total = cartItems.reduce((sum, i) => sum + i.price * i.qty, 0);

  useEffect(() => {
    if (!address) {
      navigate("/address");
    }
  }, [address, navigate]);

  if (!address) return null;

  function placeOrder() {
    console.log("ORDER PLACED:", {
      items: cartItems,
      address,
      total,
      payment: "COD",
    });
    dispatch(clearCart());
    navigate("/");
  }

  return (
    <Container className="mt-4">
      <h3>Checkout</h3>

      {/* DELIVERY ADDRESS SECTION */}
      <div className="mt-3 p-3 border rounded">
        <h5>Delivery Address</h5>

        <p>
          <strong>{address.name}</strong> — {address.phone}
          <br />
          {address.line1}, {address.city} – {address.pincode}
        </p>

        <Button
          variant="outline-danger"
          size="sm"
          onClick={() => navigate("/address")}
        >
          Change / Add New Address
        </Button>
      </div>

      {/* ORDER SUMMARY */}
      <div className="mt-3 p-3 border rounded">
        <h5>Order Summary</h5>
        {cartItems.map((item) => (
          <p key={item.id}>
            {item.name} × {item.qty} — ₹{item.price * item.qty}
          </p>
        ))}
      </div>

      <h4 className="mt-3">Total: ₹{total}</h4>

      <Button className="mt-3" variant="danger" onClick={placeOrder}>
        Place Order (COD)
      </Button>
    </Container>
  );
}

export default Checkout;
