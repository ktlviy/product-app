import { useEffect, useState } from "react";
import { useProductStore } from "@/store/productStore";
import { buildProductQueryString } from "@/lib/utils";
import { usePagination } from "./usePagination";
import type { Order } from "@/types/order";
import { useDebounce } from "@/hooks/useDebounce";

export function useProductFilters(limit = 12) {
  const { products, loading, fetchProducts } = useProductStore();
  const [search, setSearch] = useState<string>("");
  const debouncedSearch = useDebounce(search, 400);
  const [order, setOrder] = useState<Order>({ sortBy: "title", order: "asc" });
  const [category, setCategory] = useState<string>("all");
  const [total, setTotal] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const { skip, setSkip, currentPage, totalPages, onPageChange } =
    usePagination(limit, total);

  useEffect(() => {
    setSkip(0);
  }, [category, debouncedSearch, setSkip]);

  useEffect(() => {
    setError(null);
    const { endpoint, queryString } = buildProductQueryString({
      search: debouncedSearch,
      category,
      order,
      limit,
      skip,
    });
    fetchProducts(endpoint + queryString)
      .then((res: any) => {
        if (res && typeof res.total === "number") setTotal(res.total);
        else setTotal(100);
      })
      .catch((err: any) => {
        setError(
          err?.message ||
            "An error occurred while fetching products. Please try again."
        );
      });
  }, [fetchProducts, limit, skip, order, category, debouncedSearch]);

  return {
    products,
    loading,
    error,
    search,
    setSearch,
    order,
    setOrder,
    category,
    setCategory,
    currentPage,
    totalPages,
    onPageChange,
  };
}
