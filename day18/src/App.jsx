import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [products, setProducts] = useState([]);

  async function fetchProducts() {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setProducts(res.data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>

      <button onClick={fetchProducts}>Fetch Products</button>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px",
            padding: "10px",
            width: "300px",
          }}
        >
          <h2>{product.title}</h2>

          <img
            src={product.images[0]}
            alt={product.title}
            width="200"
          />

          <p>{product.description}</p>

          <h3>${product.price}</h3>
        </div>
      ))}
    </div>
  );
}