import type { Order } from "./order";
import type { Category } from "./products";

export interface NavbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  order: Order;
  onOrderChange: (order: Order) => void;
  category: string;
  onCategoryChange: (category: string) => void;
}

export interface SortField {
  value: string;
  label: string;
}

export interface NavbarCategoryProps {
  category: string;
  onCategoryChange: (category: string) => void;
  categories: Category[];
}

export interface NavbarSearchProps {
  value: string;
  onChange: (v: string) => void;
}

export interface NavbarSortProps {
  order: Order;
  onOrderChange: (order: Order) => void;
}
