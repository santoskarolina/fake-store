"use client";

import { useState } from "react";
import { useProductStore } from "@/src/app/_store/useProductStore";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const titleParam = searchParams.get("searchTitle") || "";
  const categoryParam = searchParams.get("searchCategory") || "";

  const [searchTitle, setSearchTitle] = useState<string>(titleParam);
  const [searchCategory, setCategory] = useState<string>(categoryParam);
  const categories = useProductStore((state) => state.categories);

  const handleSearch = () => {
    const query = new URLSearchParams();
    if (searchTitle) query.set('searchTitle', searchTitle);
    if (searchCategory) query.set('searchCategory', searchCategory);
    const queryString = query.toString();

    if (!!params && !!params.id) {
      router.push(`/?${query}`);
    } else {
      router.push(`?${queryString}`, { scroll: false });
    }
  };

  const onChangeOrdenation = (e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value);

  return (
    <header className="flex flex-col md:flex-row bg-brand-blue w-full p-4 border-b-blue-950 border-b-2 gap-4 items-center justify-center">
      <div className="w-full md:w-40 flex justify-center md:justify-start shrink-0">
        <Link href={`/`}>
          <Image
            src="/vercel.svg"
            width={40}
            height={40}
            alt="Logo Marca da Loja Fake Store"
          />
        </Link>
      </div>

      <div className="flex items-center flex-1 max-w-2xl">
        <div className="flex w-full items-center">
          <input
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            type="text"
            placeholder="Buscar produtos..."
            className="bg-white text-black shadow-sm border h-10 px-4 w-full rounded-l-md outline-none focus:ring-2 focus:ring-yellow-600"
          />

          <select
            onChange={onChangeOrdenation}
            name="category-filter"
            value={searchCategory}
            id="category-filter"
            className="h-10 border border-l-0 bg-gray-50 px-1 md:px-2 text-xs md:text-sm text-gray-700 outline-none max-w-[100px] md:max-w-none"
          >
            <option value="">Todas as Categorias</option>
            {categories.map((category) => (
              <option value={category} key={category}>{category}</option>
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
      <div className="hidden md:block w-40 shrink-0"></div>
    </header>
  );
};

export default Header;