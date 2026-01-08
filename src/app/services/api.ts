import { Product } from "../types/product";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch('https://fakestoreapi.com/products');
  if (!response.ok) throw new Error('Falha ao carregar produtos');
  return response.json();
};