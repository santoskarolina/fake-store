"use client";

import EmptyProducts from "@/src/app/_components/EmptyProducts";
import { getProductDetails } from "@/src/app/_services/api";
import { ProductDetails } from "@/src/app/_types/product-details";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "./loading";

export default function Details({ id }: { id: number }) {
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const getItens = async () => {
      try {
        const data = await getProductDetails(id);
        setProduct(data);
        setLoading(false);
      } catch {
        setError(true);
      }
    };
    getItens();
  }, []);

  if (loading) return <Loading />
  if (error)  return <EmptyProducts message="Falha ao carregar dados do protudo." />

  return !!product && (
    <div className="grid w-full max-w-5xl gap-8 md:grid-cols-2 p-8 rounded-3xl">
      <div className="flex items-center justify-center bg-zinc-100 rounded-2xl overflow-hidden p-8 border border-zinc-200">
        <Image
          src={product.image}
          width={1920}
          height={600}
          alt={product.title}
          className="w-full max-w-100 h-auto object-contain mix-blend-multiply hover:scale-105 transition-transform duration-300"
        ></Image>
      </div>

      <div className="flex flex-col justify-center space-y-6">
        <div className="space-y-2">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Categoria: {product.category}
          </span>
          <h1 className="text-3xl font-extrabold text-zinc-900 leading-tight">
            {product.title}
          </h1>
        </div>

        <div className="space-y-4">
          <p className="text-3xl font-bold text-zinc-800">R$ {product.price}</p>
          <p className="text-zinc-800">
            {product.rating.rate} ({product.rating.count} Avaliações)
          </p>
          <p className="text-zinc-600 leading-relaxed text-lg">
            {product.description}
          </p>
        </div>

        <div className="pt-6 space-y-4">
          <button className="w-full bg-zinc-900 text-white py-4 rounded-xl font-bold text-lg hover:bg-zinc-800 transition-colors shadow-lg active:scale-[0.98]">
            Adicionar ao Carrinho
          </button>
          <button className="w-full bg-white border border-zinc-300 text-zinc-700 py-4 rounded-xl font-bold text-lg hover:bg-zinc-50 transition-colors">
            Comprar Agora
          </button>
        </div>
      </div>
    </div>
  );
}
