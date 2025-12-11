import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { addToCart } from "../store/slices/cartSlice";
import { useState } from "react";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [imgError, setImgError] = useState(false);

  const placeholderImg =
    "https://www.shineprolifesciences.net/product-image-dummy.jpg";

  const product = useSelector((state) =>
    state.products.products.find((p) => p.id == id)
  );

  if (!product) return <h3>Product Not Found</h3>;

  const mainImage =
    imgError || !product.images || !product.images[0]
      ? placeholderImg
      : product.images[0];

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <img
            src={mainImage}
            onError={() => setImgError(true)}
            style={{ width: "100%", borderRadius: "10px" }}
            alt={product.name}
          />
        </Col>

        <Col md={6}>
          {/* 🔙 BACK BUTTON */}
          <Button
            variant="outline-dark"
            size="sm"
            className="mb-3"
            onClick={() => navigate(-1)}
          >
            ← Back
          </Button>

          <h2>{product.name}</h2>
          <h4 className="text-danger">₹{product.price}</h4>

          <div className="d-flex align-items-center gap-2 mt-2">
            <i className="bi bi-star-fill text-warning fs-5"></i>
            <span className="fw-semibold">{product.ratings} / 5</span>
          </div>

          <p className="mt-3">{product.description}</p>

          <p>
            <strong>Quantity: </strong>
            {product.quantity === 0 ? "Out of Stock" : product.quantity}
          </p>

          {product.quantity === 0 ? (
            <Button variant="secondary" disabled>
              Out of Stock
            </Button>
          ) : (
            <Button
              variant="danger"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetails;
