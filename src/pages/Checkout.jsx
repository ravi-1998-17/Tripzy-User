import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/slices/cartSlice";
import { Container, Button } from "react-bootstrap";
import { saveOrder, updateProductQty } from "../api/firebaseApi";

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

  async function placeOrder() {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (!token || !userId) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    const orderData = {
      userId,
      items: cartItems.map((i) => ({
        productId: i.id,
        name: i.name,
        qty: i.qty,
        price: i.price,
      })),
      address,
      total,
      status: "placed",
      payment: "COD",
      createdAt: new Date().toISOString(),
    };

    await saveOrder(orderData, token);

    for (let item of cartItems) {
      const newQty = item.quantity - item.qty;
      await updateProductQty(item.id, newQty, token);
    }

    dispatch(clearCart());

    alert("Order placed successfully!");
    navigate("/");
  }

  return (
    <Container className="mt-4">
      <h3>Checkout</h3>

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
