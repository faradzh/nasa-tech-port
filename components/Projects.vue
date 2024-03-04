<template>
  <div class="w-4/5 m-auto pt-10 pb-10 h-screen">
    <ProjectsList>
      <ProjectItem
        v-for="project in data.projects"
        :key="project.projectId"
        :data="project"
      />
    </ProjectsList>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "./types";

const { data } = defineProps<{ data: { projects: Project[] } }>();
</script>

<style scoped></style>
