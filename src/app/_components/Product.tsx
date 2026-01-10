import Link from "next/link";
import { Product } from "../_types/product";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border p-4 rounded-lg shadow">
      <Image
        src={product.image}
        width={160}
        height={160}
        alt="Logo Marca da Loja Fake Store"
        className="h-40 mx-auto"
      />
      <h2 className="font-semibold mt-2 line-clamp-1 text-gray-800" title={product.title}>
        {product.title}
      </h2>
      <p className="text-green-600 font-bold">${product.price}</p>
      <Link
        href={{
          pathname: `/product/${product.id}`,
          query: { name: product.title, category: product.category },
        }}
      >
        <button className="bg-brand-dark text-white py-2 rounded-xl w-full cursor-pointer mt-4">
          Ver Produto
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
