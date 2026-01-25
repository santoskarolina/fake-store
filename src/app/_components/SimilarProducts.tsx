import ProductCard from "./Product";
import { Product } from "../_types/product";

const SimilarProducts = ({ products }: { products: Product[] }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
            {products.map((product) => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    );
};

export default SimilarProducts;
