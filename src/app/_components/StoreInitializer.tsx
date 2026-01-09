'use client';

import { useRef } from 'react';
import { useProductStore } from '../_store/useProductStore';
import { Product } from '../_types/product';

export default function StoreInitializer({ products, categories }: { products: Product[], categories: string[] }) {
  const initialized = useRef(false);
  if (!initialized.current) {
    useProductStore.getState().setProducts(products);
    useProductStore.getState().setCategories(categories);
    initialized.current = true;
  }
  return null;
}