import "../css/products.css";
import { useCartContext } from "../context/cartContext";

function Product({ title, image, price }) {
  let { cart, setCart } = useCartContext();
  const handleAddItem = () => {
    setCart(cart + 1);
  };
  console.log(cart);
  return (
    <div className="product">
      <div className="product-content">
        <img src={image} alt="" />
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
        <h2>{title}</h2>
        <span>{price}$</span>
      </div>
    </div>
  );
}
export default Product;
