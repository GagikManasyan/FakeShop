import "../css/products.css";
import { useCartContext } from "../context/cartContext";

function Product({ item }) {
  let { cart, setCart } = useCartContext();
  const handleAddItem = () => {
    setCart([...cart, item]);
  };
  return (
    <div className="product">
      <div className="product-content">
        <img src={item.image} alt="" />
        <button
          className="add-item"
          onClick={() => {
            handleAddItem();
          }}
        >
          +
        </button>
      </div>
      <div className="product-desc">
        <h2>{item.title}</h2>
        <span>{item.price}$</span>
      </div>
    </div>
  );
}
export default Product;
