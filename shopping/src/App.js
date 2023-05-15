import ProductCard from "./Components/Cards/ProductCard";
import { GridSection } from "./Components/Sections/GridSection";
import { useFetch } from "./Hooks/fetch";
import { useShoppingCart } from "./Hooks/useShoppingCart";

function App() {

  const { increaseCartQuantity, returnAmount, shoppingCart} = useShoppingCart();

  const url = "https://dummyjson.com/products";

  const { apiData, loading, error } = useFetch(url, "products");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div> Error: {error.message}</div>;
  }

  return (
    <>
      <GridSection size="300px">
        {apiData.map((item, i) => (
          <ProductCard key={i} item={item} {...{increaseCartQuantity, returnAmount}}/>
        ))}
      </GridSection>
    </>
  );
}

export default App;
