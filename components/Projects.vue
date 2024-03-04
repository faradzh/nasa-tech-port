<template>
  <div class="w-4/5 m-auto pt-10 pb-10 h-screen font-mono">
    <div class="flex justify-between mb-2">
      <div class="">Project</div>
      <div class="max-w-xs"><DatePicker :enable-time-picker="false" /></div>
    </div>
    <ProjectsList>
      <ProjectItem
        v-for="project in data.projects"
        :key="project.projectId"
        :project="project"
      />
    </ProjectsList>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "./types";

const { data } = defineProps<{ data: { projects: Project[] } }>();
</script>
