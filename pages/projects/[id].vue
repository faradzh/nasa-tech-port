<template>
  <div class="w-4/5 m-auto font-mono leading">
    <div class="flex mb-12">
      <NuxtLink to="/">
        <img
          class="w-8 h-8 mr-8"
          src="/assets/images/LeftArrow.svg"
          alt="Go back to projects list"
        />
      </NuxtLink>
      <h1 class="leading-8 text-xl">Project Details</h1>
      <h2 class="ml-auto leading-8 bg-green-300 pl-4 pr-4 rounded-sm">
        {{ data?.project.statusDescription }}
      </h2>
    </div>
    <div class="mb-8">
      <h1 class="text-2xl mb-8 font-bold">{{ data?.project.title }}</h1>
      <p class="text-gray-500">{{ data?.project.benefits }}</p>
    </div>
    <section class="mb-4">
      <span class="font-bold">Project Duration: </span>
      <span
        >{{ projectDuration.startDate }} - {{ projectDuration.endDate }}
      </span>
    </section>
    <section class="mb-4">
      <span class="font-bold">Lead Organization: </span>
      <span>{{ data?.project.leadOrganization?.organizationName }} </span>
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
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type { Project } from "~/components/types";
const {
  params: { id },
} = useRoute();
const { data, pending, error } = await useFetch<{ project: Project }>(
  `/api/projects/${id}`
);

const projectDuration = computed(() => {
  if (!data.value?.project) return {};
  return {
    startDate: `${data.value?.project.startMonth}/${data.value?.project.startYear}`,
    endDate: `${data.value?.project.endMonth}/${data.value?.project.endYear}`,
  };
});

const principalInvestigators = computed(() => {
  if (!data.value?.project.principalInvestigators) return [];
  return data.value?.project.principalInvestigators.map((p) => ({
    fullName: p.fullName,
    email: p.primaryEmail,
  }));
});

const programManagers = computed(() => {
  if (!data.value?.project.programDirectors) return [];
  return data.value?.project.programDirectors.map((p) => ({
    fullName: p.fullName,
    email: p.primaryEmail,
  }));
});

const projectManagers = computed(() => {
  if (!data.value?.project.projectManagers) return [];
  return data.value?.project.projectManagers.map((p) => ({
    fullName: p.fullName,
    email: p.primaryEmail,
  }));
});
</script>
