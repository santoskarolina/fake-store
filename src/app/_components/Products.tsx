"use client";

import { useProductStore } from "@/src/app/_store/useProductStore";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import ProductCard from "./Product";
import EmptyProducts from "./EmptyProducts";

const Products = () => {
  const products = useProductStore((state) => state.displayProducts);
  const sortBy = useProductStore((s) => s.sortBy);
  const filter = useProductStore((s) => s.filter);
  const searchParams = useSearchParams();

  const titleParam = searchParams.get("searchTitle") || "";
  const categoryParam = searchParams.get("searchCategory") || "";

  useEffect(() => {
    filter(titleParam, categoryParam);
  }, [titleParam, categoryParam, filter]);

  return (
    <div className="flex flex-col max-w-5xl mt-4 p-4 gap-4">
      <div className="flex gap-2 text-gray-800">
        <span>Ordenar por</span>
        <select
          name="ordenation"
          defaultValue="default"
          id="ordenation"
          className="border rounded px-2"
          onChange={(e) => sortBy(e.target.value)}
        >
          <option value="default">Padrão</option>
          <option value="name">Nome</option>
          <option value="minValue">Menor Preço</option>
          <option value="maxValue">Maior Preço</option>
        </select>
      </div>
      {!!products.length && (!titleParam || !categoryParam) ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <EmptyProducts message="Sua busca não retornou resultados."/>
      )}
    </div>
  );
};

export default Products;
