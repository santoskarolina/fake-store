import { create } from "zustand";
import { Product } from "@/src/app/_types/product";
import { Item } from "../_types/item";

interface CarStore {
  products: Item[];
  totalCard: number;
  addProduct: (product: Product, quantity: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  removeProduct: (productId: number) => void;
}

export const useCartStore = create<CarStore>((set) => ({
  products: [],
  totalCard: 0,
  addProduct: (product, quantity) => set((state) => {
    const productIsInCart = state.products.find((p) => p.product.id === product.id);
    const products = !!productIsInCart
      ? state.products.map((item) => {
          if (item.product.id === product.id)
              return { ...item, quantity: item.quantity + quantity };
            return item;
          })
        : [...state.products, { product, quantity }];

    return { products, totalCard: calculateTotal(products) };
  }),
  removeProduct: (productId) => set((state) => {
    return {
      products: state.products.filter((p) => p.product.id !== productId),
      totalCard: calculateTotal(state.products),
    };
  }),
  updateQuantity: (productId, quantity) => set((state) => {
      const products = quantity <= 0 ? 
        state.products.filter((p) => p.product.id !== productId)
        : state.products.map((item) =>
              item.product.id === productId
                ? { ...item, quantity }
                : item
            );

      return { products, totalCard: calculateTotal(products) };
  }),
}));

const calculateTotal = (items: Item[]) => items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
