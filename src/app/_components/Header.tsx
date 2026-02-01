"use client";

import { useState } from "react";
import { useProductStore } from "@/src/app/_store/useProductStore";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useCartStore } from "../_store/useCartStore";

const Header = () => {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const titleParam = searchParams.get("title") || "";
  const categoryParam = searchParams.get("categoryId") || "";

  const [title, settitle] = useState<string>(titleParam);
  const [category, setCategory] = useState<string>(categoryParam);
  const categories = useProductStore((state) => state.categories);
  const totalItens = useCartStore(state => state.products.length);
  

  const handleSearch = () => {
    const query = new URLSearchParams();
    if (title) query.set('title', title);
    if (category) query.set('categoryId', category);
    const queryString = query.toString();

    if (!!params && !!params.id) {
      router.push(`/?${query}`);
    } else {
      router.push(`?${queryString}`, { scroll: false });
    }
  };

  const onChangeOrdenation = (e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value);

  return (
    <header className="z-50 flex fixed top-0 left-0 flex-col h-40 md:h-20 md:flex-row bg-brand-blue w-full p-4 border-b-blue-950 border-b-2 gap-4 items-center justify-between">
      <div className="md:w-40 flex justify-center md:justify-center shrink-0">
        <Link href={`/`}>
          <Image
            src="/vercel.svg"
            width={40}
            height={40}
            alt="Logo Marca da Loja Fake Store"
          />
        </Link>
      </div>

      <div className="flex items-center max-w-2xl flex-1">
        <div className="flex w-full items-center">
          <input
            value={title}
            onChange={(e) => settitle(e.target.value)}
            type="text"
            placeholder="Buscar produtos..."
            className="bg-white text-black shadow-sm border h-10 px-4 w-full rounded-l-md outline-none focus:ring-2 focus:ring-yellow-600"
          />

          <select
            onChange={onChangeOrdenation}
            name="category-filter"
            value={category}
            id="category-filter"
            className="h-10 border border-l-0 bg-gray-50 px-1 md:px-2 text-xs md:text-sm text-gray-700 outline-none max-w-25 md:max-w-none"
          >
            <option value="">Todas as Categorias</option>
            {categories.map((category) => (
              <option value={category.id} key={category.id}>{category.name}</option>
            ))}
          </select>
          <button
            onClick={handleSearch}
            className="h-10 border border-l-0 rounded-r-md bg-gray-50 px-2 text-sm text-gray-700 outline-none cursor-pointer"
            title="Realizar Pesquisa"
          >
            <Image
              src="/search-icon.png"
              width={40}
              height={40}
              alt="Icone para realizar Pesquisa"
            ></Image>
          </button>
        </div>
      </div>
      <div className="md:block w-40 shrink-0 cursor-pointer">
        <Link className="cursor-pointer flex gap-2" href={{ pathname: `/cart` }}>
          <Image
            src="/cart.png"
            width={30}
            className="invert"
            height={30}
            alt="Logo Marca da Loja Fake Store"
          />
          <p>{totalItens}</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;