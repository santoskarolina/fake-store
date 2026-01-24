import StoreInitializer from "./StoreInitializer";
import Products from "./Products";
import { getProducts } from "../_services/api";

export default async function ProductsWrapper() {
  const products = await getProducts();
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <>
      <StoreInitializer products={products} categories={categories}/>
      <Products />
    </>
  );
}