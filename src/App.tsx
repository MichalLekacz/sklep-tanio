import "./App.css";
import { Product } from "./components/Product";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);

      const productData = res.data.slice(0, 5);

      setProducts(productData);
    };
    fetchData();
  }, []);

  return (
    <>
      <main className="grid-container">
        <div className="grid-item">
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
