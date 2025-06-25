import { create } from "zustand";
import type { ProductStore } from "@/types/products";
import * as productService from "@/services/produtcs";

export const useProductStore = create<ProductStore>((set) => ({
  products: [],
  categories: [],
  loading: false,
  error: null,
  selectedProduct: null,

  fetchProducts: async (params = "") => {
    set({ loading: true, error: null });
    try {
      const response = await productService.getProducts(params);
      set({ products: response.products, loading: false });
      return response;
    } catch (error: any) {
      set({
        error: error.message || "Failed to fetch products",
        loading: false,
      });
      return null;
    }
  },
  fetchCategories: async () => {
    set({ loading: true, error: null });
    try {
      const categories = await productService.getCategories();
      set({ categories, loading: false });
    } catch (error: any) {
      set({
        error: error.message || "Failed to fetch categories",
        loading: false,
      });
    }
  },
}));
