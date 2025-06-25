import type { Order } from "./order";

export interface BuildProductQueryStringProps {
  search: string;
  category: string;
  order: Order;
  limit: number;
  skip: number;
}
