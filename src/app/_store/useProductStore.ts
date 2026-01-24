import { create } from "zustand";
import { Product } from "@/src/app/_types/product";

interface ProductStore {
  allProducts: Product[];
  categories: string[];
  setProducts: (products: Product[]) => void;
  setCategories: (categories: string[]) => void;
  sortBy: (key: string) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  allProducts: [],
  categories: [],
  setCategories: (categories) => set({ categories }),
  setProducts: (products) => set({ allProducts: products }),
  sortBy: (key: string) => set((state) => sortBy(key, state)),
}));

const sortBy = (key: string, state: ProductStore) => {
  const items = structuredClone(state.allProducts);
  const options: Record<string, () => Product[]> = {
    'name': () => items.sort((a, b) => a.title.localeCompare(b.title)),
    'minValue': () => items.sort((a, b) => a.price - b.price),
    'maxValue': () => items.sort((a, b) => b.price - a.price),
  }
  if (!options[key]) return { allProducts: items };
  options[key]();
  return { allProducts: items };
};
