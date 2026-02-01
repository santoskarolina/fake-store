import Image from "next/image"
import Link from "next/link"
import { useCartStore } from "../_store/useCartStore";

export const CartButton = () => {
    const totalItens = useCartStore(state => state.products.length);
    return (
        <Link 
          className="fixed md:static md:rounded-none rounded-full bg-brand-blue md:w-auto md:h-auto w-10 h-10 bottom-10 right-10 p-4 gap-0 md:gap-2 flex cursor-pointer" 
          href={{ pathname: `/cart` }}>
          <Image
            src="/cart.png"
            width={30}
            className="invert"
            height={30}
            alt="Logo Marca da Loja Fake Store"
          />
          <p>{totalItens}</p>
        </Link>
    )
}