import { useSelector } from "react-redux";
import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Home.module.css";

export default function Home() {
  const products = useSelector((state) => state.products.products);

  const categories = ["doors", "tables", "chairs", "beds", "sofas"];

  return (
    <div>
      <Slider />

      <Container className="mt-4 mb-4">
        <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
          <h3 className="m-0">Categories</h3>
          <div className="d-flex gap-4 flex-wrap justify-content-end">
            {categories.map((cat) => (
              <span
                key={cat}
                className={styles.categoryItem}
                onClick={() => (window.location.href = `/category/${cat}`)}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
        <Row>
          {products.map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
