import { create } from "zustand";
import { Product } from "@/src/app/_types/product";

interface ProductStore {
  allProducts: Product[];
  displayProducts: Product[];
  categories: string[];
  setProducts: (products: Product[]) => void;
  setCategories: (categories: string[]) => void;
  sortBy: (key: string) => void;
  filter: (searchTitle: string, searchCategory: string) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  allProducts: [],
  displayProducts: [],
  categories: [],
  setCategories: (categories) => set({ categories }),
  setProducts: (products) => set({ allProducts: products, displayProducts: products }),
  sortBy: (key: string) => set((state) => sortBy(key, state)),
  filter: (title, category) => set((state) => filter(state, title, category)),
}));

const sortBy = (key: string, state: ProductStore) => {
  const itens = structuredClone(state.displayProducts);
  const options: Record<string, () => Product[]> = {
    'name': () => itens.sort((a, b) => a.title.localeCompare(b.title)),
    'minValue': () => itens.sort((a, b) => a.price - b.price),
    'maxValue': () => itens.sort((a, b) => b.price - a.price),
  }
  if (!options[key]) return filter(state);
  options[key]();
  return { displayProducts: itens };
};

const filter = (state: ProductStore, title: string = '', category: string = '') => {
  return {
    displayProducts: state.allProducts.filter((product) => {
      const matchTitle = product.title.toLowerCase().includes(title.toLowerCase());
      const matchCategory = product.category.toLowerCase().includes(category.toLowerCase());
      return matchTitle && matchCategory;
    }),
  };
};
