import { useState, useEffect } from "react";
import Product from "./components/product";

function WomenProducts() {
  const [womenProducts, setWomenProducts] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((json) => setWomenProducts(json))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ul id="products">
      {womenProducts &&
        womenProducts.map((product) => {
          return (
            <li>
              <Product
                key={product.id}
                title={product.title}
                image={product.image}
                price={product.price}
              />
            </li>
          );
        })}
    </ul>
  );
}

export default WomenProducts;
