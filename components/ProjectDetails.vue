<template>
  <div class="mb-8">
    <h1 class="text-2xl mb-8 font-bold">{{ project?.title }}</h1>
    <p class="text-gray-500">{{ project?.benefits }}</p>
  </div>
  <section class="mb-4">
    <span class="font-bold">Project Duration: </span>
    <span
      >{{ projectDuration.startDate }} - {{ projectDuration.endDate }}
    </span>
  </section>
  <section class="mb-4">
    <span class="font-bold">Lead Organization: </span>
    <span>{{ project?.leadOrganization?.organizationName }} </span>
  </section>
  <section class="mb-4">
    <span class="font-bold">Principal Investigators: </span>
    <span v-for="investor in principalInvestigators">
      {{ investor.fullName }}
    </span>
  </section>
  <section class="mb-4">
    <span class="font-bold">Program Managers: </span>
    <span v-for="programManager in programManagers">
      {{ programManager.fullName }}
    </span>
  </section>
  <section>
    <span class="font-bold">Project Managers: </span>
    <span v-for="projectManager in projectManagers">
      {{ projectManager.fullName }},
    </span>
  </section>
  <h2 class="ml-auto leading-8 bg-green-300 pl-4 pr-4 rounded-sm">
    {{ project?.statusDescription }}
  </h2>
</template>

<script setup lang="ts">
import type { Project } from "./types";

const { project } = defineProps<{ project?: Project }>();

const projectDuration = computed(() => {
  if (!project) return {};
  return {
    startDate: `${project.startMonth}/${project.startYear}`,
    endDate: `${project.endMonth}/${project.endYear}`,
  };
});

const principalInvestigators = computed(() => {
  if (!project?.principalInvestigators) return [];
  return project.principalInvestigators.map((p) => ({
    fullName: p.fullName,
    email: p.primaryEmail,
  }));
});

const programManagers = computed(() => {
  if (!project?.programDirectors) return [];
  return project.programDirectors.map((p) => ({
    fullName: p.fullName,
    email: p.primaryEmail,
  }));
});

const projectManagers = computed(() => {
  if (!project?.projectManagers) return [];
  return project.projectManagers.map((p) => ({
    fullName: p.fullName,
    email: p.primaryEmail,
  }));
});
</script>
