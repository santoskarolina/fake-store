"use client";

import { QuantitySelector } from "@/src/app/_components/QuantitySelector";
import { useCartStore } from "@/src/app/_store/useCartStore";
import { Product } from "@/src/app/_types/product";
import Image from "next/image";
import { useState } from "react";

export default function Details({ product }: { product: Product }) {
  const addProduct = useCartStore(state => state.addProduct);
  const totalCard = useCartStore(state => state.totalCard);
  const [quantity, setQuantity] = useState<number>(1);

  return (
    <div className="grid w-full max-w-5xl gap-8 md:grid-cols-2 p-8 rounded-3xl">
      <div className="flex items-center justify-center bg-zinc-100 rounded-2xl overflow-hidden p-8 border border-zinc-200">
        <Image
          src={product.images[0]}
          width={1920}
          height={600}
          alt={product.title}
          className="w-full max-w-100 h-auto object-contain mix-blend-multiply hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col justify-center space-y-6">
        <div className="space-y-2">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Categoria: {product.category.name}
          </span>
          <h1 className="text-3xl font-extrabold text-zinc-900 leading-tight">
            {product.title}
          </h1>
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-bold text-zinc-800">R$ {product.price}</p>
          <p className="text-zinc-600 leading-relaxed text-lg">
            {product.description}
          </p>
          <p>{totalCard}</p>
        </div>

        <div className="pt-6 space-y-4 flex flex-col">
          <QuantitySelector quantity={quantity} add={() => setQuantity(quantity+1)} remove={() => setQuantity(quantity-1)} />
          <button onClick={() => addProduct(product, quantity)} className="bg-transparent border border-zinc-300 text-zinc-900 cursor-pointer px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-100 transition-all duration-300">
            Adicionar ao Carrinho
          </button>
          <button className="button">
            Comprar Agora
          </button>
        </div>
      </div>
    </div>
  );
}
