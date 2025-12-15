import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button } from "react-bootstrap";
import { addToCart } from "../store/slices/cartSlice";
import { useEffect, useState } from "react";
import { fetchProducts } from "../api/firebaseApi";
import { setProducts, setLoading } from "../store/slices/productsSlice";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imgError, setImgError] = useState(false);

  const { products, loading } = useSelector((state) => state.products);

  useEffect(() => {
    if (products.length === 0) {
      async function loadProducts() {
        dispatch(setLoading());

        const data = await fetchProducts();

        if (data) {
          const list = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));

          dispatch(setProducts(list));
        }
      }

      loadProducts();
    }
  }, [dispatch, products.length]);

  if (loading) {
    return <h3 className="text-center mt-5">Loading product...</h3>;
  }

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h3 className="text-center mt-5">Product Not Found</h3>;
  }

  const placeholderImg =
    "https://www.shineprolifesciences.net/product-image-dummy.jpg";

  const mainImage =
    imgError || !product.images?.[0]
      ? placeholderImg
      : product.images[0];

  return (
    <Container className="mt-4">
      <Row>
        <Col md={6}>
          <img
            src={mainImage}
            onError={() => setImgError(true)}
            alt={product.name}
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Col>

        <Col md={6}>
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

          <p className="mt-3">{product.description}</p>

          <p>
            <strong>Quantity:</strong>{" "}
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
