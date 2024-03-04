<template>
  <li class="w-auto h-16 mb-2 bg-white shadow rounded-sm">
    <div class="flex justify-between pl-2 pr-2">
      <h3 class="max-w-96 truncate p-2 leading-12">
        Project Title That Can Be Long
      </h3>
      <NuxtLink
        :to="`/projects/${project.projectId}`"
        class="h-8 pl-6 pr-6 pt-1 bg-red-400 mt-4 text-white rounded-sm"
        >View</NuxtLink
      >
    </div>
  </li>
</template>

<script setup lang="ts">
import type { Project } from "./types";

const { project } = defineProps<{ project: Project }>();

// const project = ref<Project>();

// async function fetchProjectData() {
//   const response = await $fetch<{ project: Project }>(
//     `/api/projects/${data.projectId}`
//   );
//   project.value = response.project;
// }

// onMounted(() => {
//   !data.title && fetchProjectData();
// });
</script>
