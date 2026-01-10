import Header from "./_components/header";
import Icons from "./_components/icons";
import Products from "./_components/products";
import StoreInitializer from "./_components/storeInitializer";
import { getProducts } from "./_services/api";
import { Product } from "./_types/product";

export default async function Home() {
  const products: Product[] = await getProducts();
  const categories: string[] = [...new Set(products.map(p => p.category))];

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <StoreInitializer products={products} categories={categories}/>
      <Header />
      <div>
        <img src="banner.jpg" alt="Fake Store" />
      </div>
      <div className="max-w-5xl">
        <Icons />
        <Products />
      </div>
    </div>
  );
}
