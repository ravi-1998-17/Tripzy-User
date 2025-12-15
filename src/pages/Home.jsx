import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Home.module.css";
import { fetchProducts } from "../api/firebaseApi";
import { setProducts, setLoading } from "../store/slices/productsSlice";

function Home() {
  const dispatch = useDispatch();

  const { products, loading } = useSelector((state) => state.products);

  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    async function loadProducts() {
      dispatch(setLoading());

      const data = await fetchProducts();

      if (data) {
        const list = Object.keys(data).map((id) => ({
          id,
          ...data[id],
        }));

        dispatch(setProducts(list));
      } else {
        dispatch(setProducts([]));
      }
    }

    loadProducts();
  }, [dispatch]);

  if (loading) {
    return <h3 className="text-center mt-5">Loading products...</h3>;
  }

  const categories = [
    "all",
    ...new Set(products.map((p) => p.category)),
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

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
                {cat.toUpperCase()}
              </span>
            ))}
          </div>
        </div>

        {/* PRODUCTS */}
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
