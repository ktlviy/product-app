import { useState, useCallback } from "react";

export function usePagination(limit: number, total: number) {
  const [skip, setSkip] = useState(0);

  const currentPage = Math.floor(skip / limit) + 1;
  const totalPages = Math.ceil(total / limit);

  const onPageChange = useCallback(
    (page: number) => {
      setSkip((page - 1) * limit);
    },
    [limit]
  );

  return {
    skip,
    setSkip,
    currentPage,
    totalPages,
    onPageChange,
  };
}
