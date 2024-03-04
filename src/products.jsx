import { useSectionContext } from "./context/sectionContext";
import MenProducts from "./menProducts";
import WomenProducts from "./womenProducts";

function Products() {
  const { section } = useSectionContext();
  return (
    <div id="products-wrapper">
      {section.gender === "men" ? <MenProducts /> : <WomenProducts />}
    </div>
  );
}
export default Products;
