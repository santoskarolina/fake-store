export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
}

export type ProductDetails = Product & {
  rating: {
    count: number;
    rate: number
  }
}