import { useState, useEffect } from "react";
import Product from "./components/product";

function MenProducts() {
  const [menProducts, setMenProducts] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((json) => setMenProducts(json))
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <ul id="products">
      {menProducts &&
        menProducts.map((product) => {
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

export default MenProducts;
