<template>
  <li class="w-auto h-16 mb-2 bg-white shadow rounded-sm">
    {{ data.projectId }}<span>{{ data.title }}</span>
  </li>
</template>

<script setup lang="ts">
import type { Project } from "./types";

const { data } = defineProps<{ data: Project }>();

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

<style scoped></style>
