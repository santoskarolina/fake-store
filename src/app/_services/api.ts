import { Product } from "../_types/product";
import { ProductDetails } from "../_types/product-details";

const BASE_URL: string = 'https://fakestoreapi.com/products';

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(BASE_URL);
  if (!response.ok) throw new Error('Falha ao carregar produtos');
  return response.json();
};

export const getProductDetails= async (id: number): Promise<ProductDetails> => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) throw new Error('Falha ao carregar produto');
  return response.json();
};