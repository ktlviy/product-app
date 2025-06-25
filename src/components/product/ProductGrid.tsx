import ProductCard from "./ProductCard";
import type { Product } from "@/types/products";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div
      className={`
        grid
        gap-4
        justify-center
        mx-auto
        w-full
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        px-1
        sm:px-2
        md:px-4
        lg:px-8
        place-items-center
      `}
    >
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
}
