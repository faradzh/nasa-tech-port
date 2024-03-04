<template>
  <Projects :data="projects" />
</template>

<script setup lang="ts">
import type { Project } from "~/components/types";

const { data: projects } = useFetch<{ projects: Project[] }>("/api/projects");
</script>
