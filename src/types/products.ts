export interface Product {
  id: number;
  title: string;
  images: string[];
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
}
export interface ProductStore {
  products: Product[];
  categories: Category[];
  loading: boolean;
  error: string | null;
  selectedProduct: Product | null;
  fetchProducts: (params?: string) => Promise<ProductsResponse | null>;
  fetchCategories: () => Promise<void>;
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface CategoryProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface Category {
  name: string;
  slug: string;
  url: string;
}

export interface ProductPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
