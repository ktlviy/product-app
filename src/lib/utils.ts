import type { BuildProductQueryStringProps } from "@/types/queryBuilder";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildProductQueryString({
  search,
  category,
  order,
  limit,
  skip,
}: BuildProductQueryStringProps) {
  const endpoint = search
    ? "/search"
    : category && category !== "all"
    ? `/category/${category}`
    : "";

  const params = new URLSearchParams();
  if (search) params.append("q", search);
  if (typeof limit === "number") params.append("limit", String(limit));
  if (typeof skip === "number") params.append("skip", String(skip));
  if (order?.sortBy) params.append("sortBy", order.sortBy);
  if (order?.order) params.append("order", order.order);
  const queryString = params.toString() ? `?${params.toString()}` : "";

  return { endpoint, queryString };
}
