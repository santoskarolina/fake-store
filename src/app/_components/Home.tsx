import { getProducts } from "../_services/api";
import { Product } from "../_types/product";
import Products from "./Products";
import StoreInitializer from "./StoreInitializer";

export default async function HomeContainer() {
  const products: Product[] = await getProducts();
  const categories: string[] = [...new Set(products.map((p) => p.category))];

  return (
    <>
      <StoreInitializer products={products} categories={categories} />
      <Products />
    </>
  );
}
