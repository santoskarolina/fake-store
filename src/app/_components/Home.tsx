"use client";

import { getProducts } from "@/src/app/_services/api";
import { Product } from "@/src/app/_types/product";
import Products from "@/src/app/_components/Products";
import StoreInitializer from "@/src/app/_components/StoreInitializer";
import { useEffect, useState } from "react";
import Loading from "./loading";
import EmptyProducts from "./EmptyProducts";

export default function HomeContainer() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getItens = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        setCategories([...new Set(data.map((p) => p.category))]);
        setLoading(false);
      } catch {
        setError(true);
      }
    };
    getItens();
  }, []);

  if (error) return <EmptyProducts message="Falha ao carregar produtos" />;
  if (loading) return <Loading />;

  return  (
    <>
      <StoreInitializer products={products} categories={categories} />
      <Products />
    </>
  );
}
