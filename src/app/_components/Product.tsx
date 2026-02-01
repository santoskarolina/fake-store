import Link from "next/link";
import { Product } from "../_types/product";
import Image from "next/image";

const ProductCard = ({ product }: { product: Product }) => {

  const isValidImage = product.images[0].startsWith('https');
  
  return isValidImage && (
    <div className="border p-4 rounded-lg shadow">
      <Image
        src={product.images[0]}
        width={160}
        unoptimized
        height={160}
        alt="Logo Marca da Loja Fake Store"
        className="h-40 mx-auto"
      />
      <h2 className="font-semibold mt-2 line-clamp-1 text-gray-800" title={product.title}>
        {product.title}
      </h2>
      <p className="text-gray-600">{product.category.name}</p>
      <p className="text-green-600 font-bold">R$ {product.price}</p>
      <Link
        className="button mt-4 inline-block w-full text-center"
        href={{ pathname: `/product/${product.id}`, query: { name: product.title, category: product.category.name, categoryId: product.category.id } }}
      >
        Ver Produto
      </Link>
    </div>
  );
};

export default ProductCard;
