"use client";

import Link from "next/link";
import { useProductStore } from "../_store/useProductStore";
import Image from "next/image";

const Products = () => {
  const products = useProductStore((state) => state.displayProducts);
  const sortBy = useProductStore((s) => s.sortBy);

  return (
    <div className="flex flex-col max-w-5xl mt-4 p-4 gap-4">
      <div className="flex gap-2 text-gray-800">
        <div>Ordenar por</div>
        <select
          name="ordenation"
          id="ordenation"
          className="border rounded px-2"
          onChange={(e) => sortBy(e.target.value)}
        >
          <option value="name">Nome</option>
          <option value="minValue">Menor Preço</option>
          <option value="maxValue">Maior Preço</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow">
            <Image
              src={product.image}
              width={160}
              height={160}
              alt="Logo Marca da Loja Fake Store"
              className="h-40 mx-auto"
            ></Image>
            <h2 className="font-semibold mt-2 line-clamp-1 text-gray-800" title={product.title}>
              {product.title}
            </h2>
            <p className="text-green-600 font-bold">${product.price}</p>
            <Link 
            href={{
              pathname: `/product/${product.id}`,
              query: { name: product.title, category: product.category },
            }}>
              <button className="bg-zinc-900 text-white py-2 rounded-xl font-bold w-full cursor-pointer">
                Ver Produto
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
