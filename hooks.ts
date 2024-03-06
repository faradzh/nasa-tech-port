export function usePagination(initialPage = 1, itemsPerPage: Ref) {
  const currentPage = ref(initialPage);
  const totalPages = ref(1);

  function goToPage(page: number) {
    if (page < 1 || page > totalPages.value) return;
    currentPage.value = page;
  }

  function nextPage() {
    goToPage(currentPage.value + 1);
  }

  function prevPage() {
    goToPage(currentPage.value - 1);
  }

  function updateTotalPages(totalItems: number) {
    totalPages.value = Math.ceil(totalItems / itemsPerPage.value);
  }

  return {
    currentPage,
    totalPages,
    goToPage,
    nextPage,
    prevPage,
    updateTotalPages,
  };
}
