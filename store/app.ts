import { defineStore } from "pinia";
import type { Project } from "~/components/types";

export const useAppStore = defineStore("app", {
  state: () => ({
    projects: {
      data: [],
      pending: false,
      status: "",
      error: "",
    },
    updatedSince: "2024-02-27",
    itemsPerPage: 10,
  }),
  actions: {
    async fetchProjects() {
      const response = await useFetch<Project[]>(
        `/api/projects?updatedSince=${this.updatedSince}`
      );
      this.projects.data = response.data.value.projects;
      this.projects.pending = response.pending;
      this.projects.status = response.status.value;
      this.projects.error = response.error.value;
    },
  },
});
