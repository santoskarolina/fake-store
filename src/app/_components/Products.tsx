"use client";

import { useProductStore } from "@/src/app/_store/useProductStore";
import ProductCard from "./Product";
import EmptyProducts from "./EmptyProducts";

const Products = () => {
  const sortBy = useProductStore((s) => s.sortBy);
  const allProducts = useProductStore((s) => s.allProducts);

  const filterOtions: { label: string, value: string }[] = [
    { label: 'Padrão', value: 'default' },
    { label: 'Nome', value: 'name' },
    { label: 'Menor Preço', value: 'minValue' },
    { label: 'Maior Preço', value: 'maxValue' },
  ];

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
          {
            filterOtions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)
          }
        </select>
      </div>
      {!!allProducts.length ? (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {allProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      ) : (
        <EmptyProducts message="Sua busca não retornou resultados." />
      )}
    </div>
  );
};

export default Products;
