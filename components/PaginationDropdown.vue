<template>
  <select
    class="pr-2 pl-4 bg-red-400 text-white rounded-sm"
    v-model.number="itemsPerPage"
  >
    <option value="10">10</option>
    <option value="25">25</option>
    <option value="50">50</option>
  </select>
</template>

<script setup lang="ts">
import { useAppStore } from "~/store/app";

const appStore = useAppStore();
const { itemsPerPage } = storeToRefs(appStore);
</script>
