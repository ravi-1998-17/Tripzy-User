import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const [imgError, setImgError] = useState(false);

  const placeholderImg =
    "https://www.shineprolifesciences.net/product-image-dummy.jpg";

  const rating = product.ratings || 4.5;

  return (
    <Card className={`shadow-sm ${styles.cardBox}`}>

      {/* IMAGE */}
      <div className={styles.imageBox}>
        <img
          src={imgError ? placeholderImg : product.images[0]}
          onError={() => setImgError(true)}
          alt={product.name}
          className={styles.image}
        />
      </div>

      <Card.Body>

        <div className="d-flex justify-content-between align-items-center mb-1">
          <Card.Title className="fs-6 fw-semibold text-truncate mb-0">
            {product.name}
          </Card.Title>

          <div className="d-flex align-items-center gap-1">
            <i className="bi bi-star-fill text-warning"></i>
            <span className="fw-medium small">{rating} / 5</span>
          </div>
        </div>

        <p className={`text-muted small mb-2 text-start ${styles.singleLine}`}>
          {product.description}
        </p>

        <div className="d-flex justify-content-between align-items-center mt-2">
          
          <span className="fw-bold text-danger fs-4">
            ₹{product.price}
          </span>

          <Button
            as={Link}
            to={`/product/${product.id}`}
            variant="danger"
            size="sm"
          >
            View Details
          </Button>

        </div>

      </Card.Body>
    </Card>
  );
}
