// login 
interface User {
  id: string | undefined;
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  phone: string | undefined;
}

interface Token {
  token: string | undefined;
}

export interface AuthResponse extends User, Token {}

export interface LoginResponseModel {
  status: number;
  data: AuthResponse;
  message: string;
}

export interface Product {
  _id: string;
  productName: string;
  description: string;
  price: number;
  productCatagory: string; // Assuming this is the ID of the product category
  stock: string;
  __v: number;
}

export type ProductArray = Product[];

export interface ProductResponseModel {
  status: number;
  data: ProductArray;
  message: string;
}

export interface Category {
  _id: string;
  catagory: string;
  __v: number;
}

export interface ProductNew {
  _id: string;
  productName: string;
  description: string;
  price: number;
  stock: string;
  __v: number;
  category: Category;
}

export interface CartItem {
  _id: string;
  quantity: number;
  __v: number;
  product: ProductNew;
}

export type CartResponse = CartItem[];

export interface CartResponseModel {
  status: number;
  data: CartResponse;
  message: string;
}