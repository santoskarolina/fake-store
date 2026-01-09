"use client";

import { Product } from "../types/product";

const ProductsList = ({ products }: { products: Product[] }) => {

    const onChangeOrdenation = (e: React.ChangeEvent<HTMLSelectElement>) => {
        console.log(e.target.value);
    }

    return (
        <div className="flex flex-col max-w-5xl mt-4 p-4 gap-4">
            <div className="flex gap-2 text-gray-800">
                <div>Ordenar por</div>
                <select name="ordenation" id="ordenation" className="border rounded px-2" onChange={onChangeOrdenation}>
                    <option value="name">Nome</option>
                    <option value="minValue">Menor Preço</option>
                    <option value="maxValue">Maior Preço</option>
                </select>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded-lg shadow">
                        <img src={product.image} alt={product.title} className="h-40 mx-auto" />
                        <h2 className="font-semibold mt-2 line-clamp-1 text-gray-800" title={product.title}>{product.title}</h2>
                        <p className="text-green-600 font-bold">${product.price}</p>
                        <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full cursor-pointer">
                            Ver Produto
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductsList;