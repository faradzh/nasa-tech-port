import { test, expect, it } from "vitest";
import { usePagination } from ".";

test("hooks", () => {
  const itemsPerPage = ref(10);
  const result = usePagination(1, itemsPerPage);
  result.updateTotalPages(50);
  expect(result.currentPage.value).toBe(1);
  result.nextPage();
  expect(result.currentPage.value).toBe(2);
  result.nextPage();
  expect(result.currentPage.value).toBe(3);
  result.prevPage();
  expect(result.currentPage.value).toBe(2);
});
