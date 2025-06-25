import Navbar from "@/components/navbar/Navbar";
import ProductGrid from "@/components/product/ProductGrid";
import ProductPagination from "@/components/product/ProductPagination";
import ProductEmptyState from "@/components/product/ProductEmptyState";
import ProductLoadingState from "@/components/product/ProductLoadingState";
import { useProductFilters } from "@/hooks/useProductFilters";

export default function ProductPage() {
  const {
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
  } = useProductFilters(15);

  return (
    <>
      <Navbar
        search={search}
        onSearchChange={setSearch}
        order={order}
        onOrderChange={setOrder}
        category={category}
        onCategoryChange={setCategory}
      />
      <section className="w-full min-h-[80vh] bg-gradient-to-b from-white to-gray-50 py-10 px-2 sm:px-4 md:px-8 lg:px-16 xl:px-32">
        <div className="max-w-7xl mx-auto">
          {error ? (
            <div className="flex flex-col items-center justify-center py-20">
              <span className="text-4xl mb-4">❌</span>
              <p className="text-lg text-red-500">{error}</p>
            </div>
          ) : loading ? (
            <ProductLoadingState />
          ) : products.length === 0 ? (
            <ProductEmptyState />
          ) : (
            <>
              <ProductGrid products={products} />
              <ProductPagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
              />
            </>
          )}
        </div>
      </section>
    </>
  );
}
