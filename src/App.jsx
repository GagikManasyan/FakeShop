import Header from "./header";
import Products from "./products";
import Home from "./home";
import "./css/reset.css";
import "./css/fonts.css";
import "./css/App.css";

function App() {
  return (
    <div id="app-wrapper">
      <Header />
      <Home />
      <Products />
    </div>
  );
}

export default App;
