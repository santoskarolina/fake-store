import { Product } from "../_types/product";
import { ProductDetails } from "../_types/product-details";

const BASE_URL: string = 'https://fakestoreapi.com/products';

const options: RequestInit = {
  cache: 'no-store',
  headers: {
    'User-Agent': 'Mozilla/5.0',
    'Content-Type': 'application/json'
  }
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(BASE_URL, options);
  if (!response.ok) return []
  return response.json();
};

export const getProductDetails = async (id: number): Promise<ProductDetails> => {
  const response = await fetch(`${BASE_URL}/${id}`, options);
  if (!response.ok) return { category: '', description: '', id: 0, image: '', price: 0, rating: { count: 1, rate: 1 }, title: '' };
  return response.json();
};