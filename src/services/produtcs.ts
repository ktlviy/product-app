import axios from "axios";
import type {
  Category,
  CategoryProductsResponse,
  Product,
  ProductsResponse,
} from "@/types/products";

axios.defaults.baseURL = "https://dummyjson.com/products";

export const getProducts = async (
  params: string
): Promise<ProductsResponse> => {
  const response = await axios.get<ProductsResponse>(params);
  return response.data;
};

export const getCategories = async (): Promise<Category[]> => {
  const response = await axios.get<Category[]>("/categories");

  return response.data;
};

export const getProductByCategory = async (
  category: string
): Promise<Product[]> => {
  const response = await axios.get<CategoryProductsResponse>(
    `/category/${category}`
  );
  return response.data.products;
};
