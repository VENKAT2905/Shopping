export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  subcategory: string;
  sizes: string[];
  colors: string[];
  fabric: string;
  careInstructions: string;
  inStock: boolean;
  featured: boolean;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  wishlist: string[];
}

export interface CartItem {
  productId: string;
  quantity: number;
  size: string;
  color: string;
}