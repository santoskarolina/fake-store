"use client";

import { useCartStore } from "../_store/useCartStore";
import { CardProduct } from "../_components/CartProduct";

export default function CartPage() {
  const items = useCartStore((state) => state.products);
  const totalCard = useCartStore((state) => state.totalCard);

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between min-h-screen items-start bg-zinc-100 font-sans md:pt-34 pt-50 pb-20 text-black md:px-20 px-10 gap-8">
      <div className="flex flex-col bg-white p-6 md:p-10 shadow-sm rounded-sm flex-2 w-full">
        <h1 className="border-b-gray-200 pb-6 border-b-2 text-2xl text-gray-600 md:text-3xl">
          Carrinho de Compras
        </h1>
        {!items.length ? (
          <div className="flex w-full items-center justify-center">
            <h1>Seu carrinho da Fake Store está vazio</h1>
          </div>
        ) : (
          <div className="flex flex-col bg-white py-10 px-2 gap-4 flex-1">
            {items.map((item) => (
              <CardProduct item={item} key={item.product.id} />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col bg-white p-6 md:p-8 gap-2 w-full md:w-80 lg:w-96 shadow-sm rounded-sm flex-1">
        <p className="text-gray-600">
          Subtotal ({items.length} itens):
          <span className="font-bold text-gray-900">
            {" "}
            R$ {totalCard.toFixed(2)}
          </span>
        </p>
        <button className="button">Fechar Pedido</button>
      </div>
    </div>
  );
}
