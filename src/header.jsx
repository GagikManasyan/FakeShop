import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMars,
  faVenus,
} from "@fortawesome/free-solid-svg-icons";
import "./css/header.css";
import { useSectionContext } from "./context/sectionContext";
import { useCartContext } from "./context/cartContext";

function Header() {
  const { section, setSection } = useSectionContext();
  let { cart, setCart } = useCartContext();
  const switchSection = () => {
    if (section.gender === "men") {
      setSection({ gender: "women", icon: faVenus });
    } else {
      setSection({ gender: "men", icon: faMars });
    }
  };
  return (
    <header>
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
                  setCart(0);
                }}
              >
                <FontAwesomeIcon icon={faCartShopping} />
                <span>{cart}</span>
              </button>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
