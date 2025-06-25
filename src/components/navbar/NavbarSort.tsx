import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import type { NavbarSortProps, SortField } from "@/types/navbar";

const sortFields: SortField[] = [
  { value: "title", label: "Title" },
  { value: "price", label: "Price" },
  { value: "discountPercentage", label: "Discount" },
];

export default function NavbarSort({ order, onOrderChange }: NavbarSortProps) {
  return (
    <div className="flex items-center gap-2">
      <Select
        value={order.sortBy}
        onValueChange={(value) => onOrderChange({ ...order, sortBy: value })}
      >
        <SelectTrigger className="w-32">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          {sortFields.map((field) => (
            <SelectItem key={field.value} value={field.value}>
              {field.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select
        value={order.order}
        onValueChange={(value) =>
          onOrderChange({ ...order, order: value as "asc" | "desc" })
        }
      >
        <SelectTrigger className="w-24">
          <SelectValue placeholder="Order" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="asc">Asc</SelectItem>
          <SelectItem value="desc">Desc</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
