import { Product } from "./product";

export type ProductDetails = Product & {
  rating: {
    count: number;
    rate: number
  }
}