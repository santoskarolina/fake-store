import StoreInitializer from "./StoreInitializer";
import Products from "./Products";
import { getCategories, getProducts } from "../_services/api";

export default async function ProductsWrapper() {
  const products = await getProducts();
  const categories = await getCategories();

  return (
    <>
      <StoreInitializer products={products} categories={categories}/>
      <Products />
    </>
  );
}