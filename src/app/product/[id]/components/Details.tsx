"use client";

import { Product } from "@/src/app/_types/product";
import Image from "next/image";

export default function Details({ product }: { product: Product }) {
  return (
    <div className="grid w-full max-w-5xl gap-8 md:grid-cols-2 p-8 rounded-3xl">
      <div className="flex items-center justify-center bg-zinc-100 rounded-2xl overflow-hidden p-8 border border-zinc-200">
        <Image
          src={product.images[0]}
          width={1920}
          height={600}
          alt={product.title}
          className="w-full max-w-100 h-auto object-contain mix-blend-multiply hover:scale-105 transition-transform duration-300"
        ></Image>
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
        </div>

        <div className="pt-6 space-y-4 flex flex-col">
          <button className="bg-transparent border border-zinc-300 text-zinc-900 cursor-pointer px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-100 transition-all duration-300">
            Adicionar ao Carrinho
          </button>
          <button className="bg-zinc-900 text-white cursor-pointer px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-800 transition-all duration-300 shadow-md">
            Comprar Agora
          </button>
        </div>
      </div>
    </div>
  );
}
