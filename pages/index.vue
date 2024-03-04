<template>
  <div class="w-auto">
    <header class="w-auto h-36 bg-red-400"></header>
    <div class="w-auto h-screen bg-slate-50">
      <Projects :data="projects" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from "~/components/types";

const { data: projects } = useFetch<{ projects: Project[] }>("/api/projects");
</script>

<style scoped></style>
