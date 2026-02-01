import Image from "next/image";
import { Item } from "../_types/item";
import { QuantitySelector } from "./QuantitySelector";
import { TrashIcon } from "../_icons/Trash";
import { useCartStore } from "../_store/useCartStore";
import Link from "next/link";

export const CardProduct = ({ item }: { item: Item }) => {
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeProduct = useCartStore((state) => state.removeProduct);

 return (
    <div className="flex flex-col flex-wrap md:flex-row gap-6 items-center md:items-start justify-between border-b-2 border-b-gray-200 pb-6">
      
      <div className="shrink-0 bg-gray-50 rounded-lg p-2">
        <Image
          src={item.product.images[0]}
          width={150}
          height={150}
          alt={item.product.title}
          className="object-contain w-32 h-32 md:w-37.5 md:h-37.5"
        />
      </div>

      <div className="flex-1 flex flex-col gap-3 w-full text-center md:text-left">
        <Link href={{ pathname: `/product/${item.product.id}`, query: { name: item.product.title, category: item.product.category.name, categoryId: item.product.category.id } }}>
          <p className="font-medium text-gray-800 text-lg hover:text-blue-900">{item.product.title}</p>
        </Link>
        
        <div className="flex gap-4 items-center justify-center md:justify-start">
          <QuantitySelector
            quantity={item.quantity}
            add={() => updateQuantity(item.product.id, item.quantity + 1)}
            remove={() => updateQuantity(item.product.id, item.quantity - 1)}
          />
          <button
            className="text-red-600 hover:text-red-800 transition-colors p-2 cursor-pointer"
            title="Remover Item"
            onClick={() => removeProduct(item.product.id)}
          >
            <TrashIcon />
          </button>
        </div>
      </div>

      <div className="md:text-right w-full md:w-auto">
        <p className="font-bold text-xl text-gray-900">
          R$ {item.product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};
