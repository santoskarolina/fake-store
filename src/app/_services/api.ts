import { Category } from "../_types/category";
import { Product } from "../_types/product";

const BASE_URL: string = 'https://api.escuelajs.co/api/v1';

const options: RequestInit = {
  cache: 'no-store',
  next: { revalidate: 0 },
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36',
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.9',
  }
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}/products`, options);
  if (!response.ok) {
    console.error(`Erro API: ${response.status} ${response.statusText}`);
    throw new Error(`API respondeu com status ${response.status} | ${response.statusText}`);
  }
  return response.json();
};

export const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(`${BASE_URL}/categories`, options);
  if (!response.ok) {
    console.error(`Erro API: ${response.status} ${response.statusText}`);
    throw new Error(`API respondeu com status ${response.status} | ${response.statusText}`);
  }
  return response.json();
};

export const getProductDetails = async (id: number): Promise<Product> => {
  const response = await fetch(`${BASE_URL}/products/${id}`, options);
  if (!response.ok) {
    throw new Error('Falha ao carregar produto');
  }
  return response.json();
};

export const productsByFilter= async (filters: Record<string, any>): Promise<Product[]> => {
  const cleanFilters = Object.fromEntries(
    Object.entries(filters).filter(([_, value]) => value != null && value !== "")
  );
  const query = new URLSearchParams(cleanFilters).toString();

  const response = await fetch(`${BASE_URL}/products/?${query}`, options);
  
  if (!response.ok) {
    console.error(`Erro API: ${response.status} ${response.statusText}`);
    throw new Error(`API respondeu com status ${response.status} | ${response.statusText}`);
  }
  return response.json();
};