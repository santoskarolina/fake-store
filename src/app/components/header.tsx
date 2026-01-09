"use client";
import { useState } from "react";

const Header = ({ categories }: { categories: string[] }) => {
    const [searchTitle, setSearchTitle] = useState('');

    const handleSearch = () => {
        console.log(searchTitle)
    }

    return (
        <header className="flex bg-[#ffe600] w-full p-4 border-b-yellow-500 border-b-2 gap-4 items-center justify-center">
            <div className="w-40 shrink-0">
                <img src="vercel.svg" alt="Fake Store" className="w-10 h-10" title="Logo Marca da Loja Fake Store"/>
            </div>

            <div className="flex items-center flex-1 max-w-2xl">
                <div className="flex w-full items-center">
                    <input 
                        value={searchTitle}
                        onChange={e => setSearchTitle(e.target.value)}
                        type="text" placeholder="Buscar produtos..." className="bg-white text-black shadow-sm border h-10 px-4 w-full rounded-l-md outline-none focus:ring-2 focus:ring-yellow-600"/>

                    <select name="category-filter" id="category-filter" className="h-10 border border-l-0 bg-gray-50 px-2 text-sm text-gray-700 outline-none">
                        <option value="">Todas as Categorias</option>
                        {
                            categories.map(category => (
                                 <option value={category} key={category}>{category}</option>
                            ))
                        }
                    </select>
                    <button 
                        onClick={handleSearch}
                        className="h-10 border border-l-0 rounded-r-md bg-gray-50 px-2 text-sm text-gray-700 outline-none cursor-pointer" 
                        title="Realizar Pesquisa">
                        <img src="search-icon.png" alt="" className="w-10"/>
                    </button>

                </div>
            </div>
            <div className="w-40 shrink-0 hidden md:block"></div>
        </header>
    )
}

export default Header;