import type { Product } from "@/types/products";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";

export default function ProductCard(product: Product) {
  const { title, images, price, discountPercentage } = product;

  const discountedPrice = price - price * (discountPercentage / 100);

  return (
    <Card className="relative aspect-[3/4] w-full max-w-xs flex flex-col justify-between rounded-xl border bg-white shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
      <div className="absolute top-3 left-3 flex items-center z-10">
        {discountPercentage > 0 && (
          <span className="bg-destructive text-white text-xs font-bold px-3 py-1 rounded-md shadow-sm">
            -{discountPercentage}% <span className="font-normal">to 01.07</span>
          </span>
        )}
      </div>
      <Button variant="circle" className="absolute top-3 right-3 z-10">
        <Heart size={20} />
      </Button>
      <div className="relative w-full  flex items-center justify-center bg-muted">
        <img
          src={images[0]}
          alt={title}
          className="max-w-[80%] max-h-[80%] object-contain rounded-lg"
        />
        <Button
          variant="circle"
          className="absolute bottom-3 right-3 bg-green-500 hover:bg-green-600 text-white"
        >
          <ShoppingCart size={22} />
        </Button>
      </div>
      <CardContent className="flex flex-col items-start gap-2 px-4 pb-4 pt-2">
        <div className="w-full line-clamp-2 text-base font-medium text-gray-900 mb-1">
          {title}
        </div>
        <div className="flex items-end gap-2">
          {discountPercentage > 0 && (
            <span className="text-sm text-gray-400 line-through">
              {price.toFixed(2)}
            </span>
          )}
          <span className="text-2xl font-bold text-red-600">
            {discountedPrice.toFixed(2)}
          </span>
          <span className="text-sm text-gray-500">USD/pcs</span>
        </div>
      </CardContent>
    </Card>
  );
}
