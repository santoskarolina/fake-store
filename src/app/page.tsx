import Header from "./components/header";
import ProductsList from "./components/productsList";
import { getProducts } from "./services/api";

export default async function Home() {
  const products = await getProducts();

  return (
    <div className="flex  flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans">
      <Header />
      <div>
        <img src="mainBanner.png" alt="" />
      </div>
      <ProductsList products={products}/>
    </div>
  );
}
