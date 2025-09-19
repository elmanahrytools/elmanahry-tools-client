// hooks/usePagination.js
"use client";
import { useSearchParams, useRouter } from "next/navigation";

export default function usePagination(totalItems, itemsPerPage = 8) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // get current page from URL
  const currentPage = parseInt(searchParams.get("page") || "1", 10);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const updatePage = (page) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page);
    router.push(`?${params.toString()}`);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    updatePage,
  };
}
