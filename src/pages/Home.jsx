import { useState } from "react";
import { useSelector } from "react-redux";
import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Home.module.css";

function Home() {
  const products = useSelector((state) => state.products.products);

  // auto-generate categories from product data
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const formatCategory = (cat) =>
    cat.charAt(0).toUpperCase() + cat.slice(1);

  return (
    <div>
      <Slider />

      <Container className="mt-4 mb-4">
        {/* CATEGORY BAR */}
        <div className="d-flex justify-content-between align-items-center mt-4 mb-4">
          <h3 className="m-0">Categories</h3>

          <div className="d-flex gap-4 flex-wrap justify-content-end">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`${styles.categoryItem} ${
                  selectedCategory === cat ? styles.activeCategory : ""
                }`}
                onClick={() => setSelectedCategory(cat)}
              >
                {formatCategory(cat)}
              </span>
            ))}
          </div>
        </div>

        {/* PRODUCT GRID */}
        <Row>
          {filteredProducts.map((product) => (
            <Col md={4} key={product.id} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}

          {filteredProducts.length === 0 && (
            <h4>No products found</h4>
          )}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
