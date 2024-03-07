<template>
  <div class="w-4/5 m-auto font-mono min-h-screen">
    <div class="flex mb-12">
      <a href="/" @click.prevent="goBack">
        <img
          class="w-8 h-8 mr-8"
          src="/assets/images/LeftArrow.svg"
          alt="Go back to projects list"
        />
      </a>
      <h1 class="leading-8 text-xl">Project Details</h1>
    </div>
    <LoadingSpinner class="mb-8" v-if="pending" />
    <div v-else-if="error">Something went wrong!</div>
    <ProjectDetails v-else :project="data?.project" />
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import type { Project } from "~/components/types";
const router = useRouter();
const {
  params: { id },
} = useRoute();

const { data, pending, error } = await useLazyFetch<{ project: Project }>(
  `/api/projects/${id}`
);

const goBack = () => {
  router.back();
};
</script>
