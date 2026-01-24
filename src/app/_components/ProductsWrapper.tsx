import StoreInitializer from "./StoreInitializer";
import Products from "./Products";
import { getCategories, getProducts, productsByFilter } from "../_services/api";

export default async function ProductsWrapper({ searchParams }: { searchParams: { category?: string, title?: string } }) {
  const categories = await getCategories();
  const products = !!searchParams ? await productsByFilter(searchParams) : await getProducts();

  return (
    <>
      <StoreInitializer products={products} categories={categories}/>
      <Products />
    </>
  );
}