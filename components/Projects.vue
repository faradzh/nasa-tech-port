<template>
  <div class="w-4/5 m-auto pt-10 pb-10 h-full font-mono min-h-screen">
    <div class="flex justify-between mb-2">
      <h1 class="text-xl leading-12 font-bold">Projects</h1>
      <div class="flex leading-12">
        <h4 class="min-w-32 text-sm leading-12">Updated since:</h4>
        <DatePicker
          class="max-w-40"
          :enable-time-picker="false"
          :clearable="false"
          :max-date="yesterday"
          :disabled="pending"
        />
      </div>
    </div>
    <div class="min-h-96">
      <LoadingSpinner class="mb-8" v-if="pending" />
      <div v-else-if="error">Something went wrong!</div>
      <ProjectsList class="mb-8" v-else>
        <ProjectItem
          v-for="project in paginatedData"
          :key="project.projectId"
          :project="project"
        />
      </ProjectsList>
    </div>
    <div class="flex justify-between">
      <ClientOnly fallback-tag="div" fallback="Loading...">
        <div>
          <PaginationDropdown />
          <span> items per page</span>
        </div>
      </ClientOnly>
      <div>{{ `Page ${currentPage} of ${totalPages}` }}</div>
      <div>
        <button
          class="bg-red-400 text-white pl-2 pr-2 rounded-sm mr-2"
          @click="prevPage"
          :disabled="currentPage === 1"
        >
          Previous
        </button>
        <button
          class="bg-red-400 text-white pl-2 pr-2 rounded-sm"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "~/store/app";
import type { Project } from "./types";
import { usePagination } from "~/hooks";
import { isValid, parse, format } from "date-fns";

const appStore = useAppStore();
const router = useRouter();
const currentRoute = useRoute();

const { updatedSince, itemsPerPage } = storeToRefs(appStore);
const {
  currentPage,
  goToPage,
  nextPage,
  prevPage,
  updateTotalPages,
  totalPages,
} = usePagination(1, itemsPerPage);

const yesterday = ref(new Date(new Date().setDate(new Date().getDate() - 1)));

const computedDate = computed(() => {
  if (currentRoute.query.updatedSince) {
    const parsedDate = parse(
      currentRoute.query.updatedSince as string,
      "yyyy-MM-dd",
      new Date()
    );
    if (isValid(parsedDate)) {
      return format(parsedDate, "yyyy-MM-dd");
    }
  }
  return "2024-02-27"; //fallback
});

const { data, pending, error } = await useLazyFetch<{
  projects: Project[];
}>(`/api/projects`, {
  query: {
    updatedSince: computedDate,
  },
});

const validPaginationOptions = [10, 25, 50];
onMounted(() => {
  const { itemsPerPage } = currentRoute.query;

  if (itemsPerPage && validPaginationOptions.includes(Number(itemsPerPage))) {
    appStore.setItemsPerPage(Number(itemsPerPage));
  }

  updateTotalPages(data.value?.projects.length ?? 1);
  appStore.setUpdatedSince(computedDate.value);
});

watch(data, () => {
  updatePagination();
});

watch(itemsPerPage, () => {
  updatePagination();
  router.push({
    query: { ...currentRoute.query, itemsPerPage: itemsPerPage.value },
  });
});
//

watch(updatedSince, () => {
  router.push({
    query: { ...currentRoute.query, updatedSince: updatedSince.value },
  });
});

function updatePagination() {
  if (currentPage.value > 1) {
    goToPage(1);
  }
  updateTotalPages(data.value?.projects.length ?? 1);
}

const paginatedData = computed(() => {
  // Calculate start and end index for the current page
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return data?.value?.projects?.slice(start, end);
});
</script>
