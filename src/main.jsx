import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/index.css";
import Section from "./context/sectionContext.jsx";
import CartItems from "./context/cartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Section>
      <CartItems>
        <App />
      </CartItems>
    </Section>
  </React.StrictMode>
);
