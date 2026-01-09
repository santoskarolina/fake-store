"use client";

import Link from "next/link";
import { ProductDetails } from "../_types/product";
import { useRouter } from "next/navigation";

const Breadcrumb = ({ product }: { product: ProductDetails }) => {
  const router = useRouter();

  const goHome = () => {
    const query = new URLSearchParams({ searchCtegory: product.category }).toString();
    router.push(`/?${query}`);
  };

  return (
    <div className="flex bg-[#292715] w-full p-4  border-b-2 gap-4 items-star justify-start">
      <Link href="/" className="hover:underline text-gray-300 transition-colors">
        Produtos
      </Link>
      <span className="font-medium truncate max-w-50 md:max-w-none">/</span>
      <p onClick={goHome} className="hover:underline text-gray-300 transition-colors"> {product.category}</p>
      
      <span className="font-medium truncate max-w-50 md:max-w-none">/</span>
      <p>{product.title}</p>
    </div>
  );
};

export default Breadcrumb;
