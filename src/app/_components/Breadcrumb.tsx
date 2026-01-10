"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const Breadcrumb = ({ name, category }: { name: string, category: string }) => {
  const router = useRouter();

  const goHome = () => {
    const query = new URLSearchParams({ searchCategory: category }).toString();
    router.push(`/?${query}`);
  };

  return (
    <div className="flex bg-[#292715] w-full p-4 border-b-2 gap-4 items-star justify-start">
      <Link href="/" className="hover:underline text-gray-300 transition-colors">
        Produtos
      </Link>
      <span className="font-medium truncate max-w-50 md:max-w-none">/</span>
      <p onClick={goHome} className="hover:underline text-gray-300 transition-colors cursor-pointer"> {category}</p>
      <span className="font-medium truncate max-w-50 md:max-w-none">/</span>
      <p>{name}</p>
    </div>
  );
};

export default Breadcrumb;
