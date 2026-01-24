'use client';

import { useEffect, useRef } from 'react';
import { useProductStore } from '@/src/app/_store/useProductStore';
import { Product } from '@/src/app/_types/product';
import { Category } from '../_types/category';

export default function StoreInitializer({ products, categories }: { products: Product[], categories: Category[] }) {
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      useProductStore.getState().setProducts(products);
      useProductStore.getState().setCategories(categories);
      initialized.current = true;
    }
  }, [products, categories]);
  return null;
}