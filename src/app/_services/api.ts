import { Product } from "../_types/product";
import { ProductDetails } from "../_types/product-details";

const BASE_URL: string = 'https://fakestoreapi.com/products';

const options: RequestInit = {
  cache: 'no-store',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Content-Type': 'application/json'
  }
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(BASE_URL, options);
  if (!response.ok) {
    console.error(`Erro API: ${response.status} ${response.statusText}`);
    throw new Error(`API respondeu com status ${response.status} | ${response.statusText}`);
  }
  return response.json();
};

export const getProductDetails = async (id: number): Promise<ProductDetails> => {
  const response = await fetch(`${BASE_URL}/${id}`, options);
  if (!response.ok) {
    throw new Error('Falha ao carregar produto');
  }
  return response.json();
};