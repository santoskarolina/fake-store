"use client";

import { Suspense, useMemo, useState } from "react";
import { useProductStore } from "@/src/app/_store/useProductStore";
import Link from "next/link";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const titleParam = searchParams.get("searchTitle");
  const categoryParam = searchParams.get("searchCtegory");
  const [searchTitle, setSearchTitle] = useState<string>(titleParam || "");
  const [searchCtegory, setCategory] = useState<string>(categoryParam || "");
  const categories = useProductStore((state) => state.categories);

  const filter = useProductStore((s) => s.filter);
  const handleSearch = () => {
    filter(searchTitle, searchCtegory);
    if (!!params.id) {
      const query = new URLSearchParams({ searchTitle, searchCtegory }).toString();
      router.push(`/?${query}`);
    }
  };
  const onChangeOrdenation = (e: React.ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value);

  useMemo(() => {
    filter(searchTitle, searchCtegory);
  }, [titleParam, categoryParam, filter]);

  return (
    <header className="flex bg-[#292715] w-full p-4 border-b-yellow-500 border-b-2 gap-4 items-center justify-center">
      <div className="w-40 shrink-0">
        <Link href={`/`}>
          <Image
            src="/vercel.svg"
            width={40}
            height={40}
            alt="Logo Marca da Loja Fake Store"
          ></Image>
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
            value={searchCtegory}
            id="category-filter"
            className="h-10 border border-l-0 bg-gray-50 px-2 text-sm text-gray-700 outline-none"
          >
            <option value="">Todas as Categorias</option>
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
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
      <div className="w-40 shrink-0 hidden md:block"></div>
    </header>
  );
};

export default function HeaderBar() {
  return (
    <Suspense fallback={<div className="h-16 bg-[#292715] w-full" />}>
      <Header />
    </Suspense>
  )
}
