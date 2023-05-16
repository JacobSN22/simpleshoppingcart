import ProductCard from "./Components/Cards/ProductCard";
import { GridSection } from "./Components/Sections/GridSection";
import { Footer } from "./Components/partials/footer";
import { Header } from "./Components/partials/header";
import { useFetch } from "./Hooks/fetch";
import { useShoppingCart } from "./Hooks/useShoppingCart";
import { useDemo } from "./Hooks/usedemo";

function App() {

  const { names } = useDemo("Niklas");

  const { increaseCartQuantity, deleteProduct, returnAmount, decreaseCartQuantity, emptyCart, shoppingCart} = useShoppingCart();

  const url = "https://dummyjson.com/products?limit=8";

  const { apiData, loading, error } = useFetch(url, "products");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div> Error: {error.message}</div>;
  }

  return (
    <>
    <Header />
      <GridSection size="300px">
        {apiData.map((item, i) => (
          <ProductCard key={i} item={item} {...{increaseCartQuantity, emptyCart, returnAmount, deleteProduct, decreaseCartQuantity}}/>
        ))}
      </GridSection>
      {names}
      <Footer />
    </>
  );
}

export default App;
