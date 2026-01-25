import Link from "next/link";
import { productsByFilter } from "../_services/api";
import SimilarProducts from "./SimilarProducts";

export default async function SimilarProductsWrapper({ categoryId }: { categoryId: number }) {
    const products = await productsByFilter({ categoryId, limit: 4, offset: 1 })

    return !!products.length && (
        <section className="flex items-start w-full max-w-5xl p-8 flex-col gap-4">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div className="flex flex-col">
                    <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">Quem viu, também gostou</h2>
                    <p className="text-zinc-500 text-sm">Produtos da mesma categoria</p>
                </div>
                
                <Link
                    className="bg-zinc-100 text-zinc-900 px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-zinc-900 hover:text-white transition-all duration-300 border border-zinc-200 shadow-sm"
                    href={{ pathname: `/`, query: { categoryId } }}
                >
                    Explorar Categoria →
                </Link>
            </div>
            <SimilarProducts products={products} />
        </section>
    )
}
