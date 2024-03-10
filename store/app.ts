import { defineStore } from "pinia";
import { sevenDaysAgo } from "~/components/utils";

export const useAppStore = defineStore("app", {
  state: () => ({
    updatedSince: sevenDaysAgo,
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
