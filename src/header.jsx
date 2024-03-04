import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMars,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import "./css/header.css";
import { useSectionContext } from "./context/sectionContext";
import { useCartContext } from "./context/cartContext";
import Product from "./components/product";

function CartWindow() {
  let { cart, setCart } = useCartContext();
  const sum = Math.floor(
    cart.reduce(
      (accumulator, currentProduct) => accumulator + currentProduct.price,
      0
    )
  );

  return (
    <div id="cart-window">
      <h3>Your Cart</h3>
      <ul>
        {cart.map((product, index) => {
          return (
            <li key={index}>
              <Product item={product} />
            </li>
          );
        })}
      </ul>
      <div id="cart-info">
        <span>Total: {sum}$</span>
        <button
          onClick={() => {
            setCart([]);
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
function Header() {
  const { section, setSection } = useSectionContext();
  let { cart, setCart } = useCartContext();
  const [showCart, setShowCart] = useState(false);
  const toggleCartWindow = () => {
    const body = document.getElementsByTagName("body")[0];
    setShowCart(!showCart);
    showCart
      ? (body.style.overflow = "auto")
      : (body.style.overflow = "hidden");
  };
  const switchSection = () => {
    if (section.gender === "men") {
      setSection({ gender: "women", icon: faVenus });
    } else {
      setSection({ gender: "men", icon: faMars });
    }
  };
  return (
    <header>
      {showCart && <CartWindow />}
      <nav>
        <ul>
          <li>
            <button
              id="switch-button"
              onClick={() => {
                switchSection();
              }}
            >
              <FontAwesomeIcon icon={section.icon} />
            </button>
          </li>
          <li>
            <div id="my-cart">
              <button
                onClick={() => {
                  toggleCartWindow();
                }}
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <span>{cart.length}</span>
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
