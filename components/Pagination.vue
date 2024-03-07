<template>
  <div class="flex justify-between">
    <ClientOnly fallback-tag="div" fallback="Loading...">
      <div>
        <PaginationDropdown />
        <span> items per page</span>
      </div>
    </ClientOnly>
    <div>{{ `Page ${data.currentPage} of ${data.totalPages}` }}</div>
    <div>
      <button
        class="bg-red-400 text-white pl-2 pr-2 rounded-sm mr-2"
        @click="data.prevPage"
        :disabled="data.currentPage === 1"
      >
        Previous
      </button>
      <button
        class="bg-red-400 text-white pl-2 pr-2 rounded-sm"
        @click="data.nextPage"
        :disabled="data.currentPage === data.totalPages"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data } = defineProps<{
  data: {
    currentPage: number;
    totalPages: number;
    prevPage: () => void;
    nextPage: () => void;
  };
}>();
</script>
