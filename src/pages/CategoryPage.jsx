import { all } from "axios";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function CategoryPage() {
  const allProducts = useSelector((state) => state.products.products);

  const filtered = allProducts.filter(
    (product) => product.category === catName
  );

  return (
    <Container>
      <h3 className="mt-4 mb-4">Showing "{catName}" Products</h3>

      <Row>
        {filtered.length === 0 ? (
          <h4>No products found in this category</h4>
        ) : (
          filtered.map((product) => (
            <Col md={4} key={product.id}>
              <ProductCard product={product} />
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
}

export default CategoryPage;
