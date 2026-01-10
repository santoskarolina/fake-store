import { getProducts } from "@/src/app/_services/api";
import { Product } from "@/src/app/_types/product";
import Products from "@/src/app/_components/Products";
import StoreInitializer from "@/src/app/_components/StoreInitializer";

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
