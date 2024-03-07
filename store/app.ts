import { defineStore } from "pinia";
import type { Project } from "~/components/types";

export const useAppStore = defineStore("app", {
  state: () => ({
    updatedSince: "2024-02-27",
    itemsPerPage: 10,
  }),
  actions: {
    setItemsPerPage(itemsPerPage: number) {
      this.itemsPerPage = itemsPerPage;
    },
    setUpdatedSince(updatedSince: string) {
      this.updatedSince = updatedSince;
    },
  },
});
