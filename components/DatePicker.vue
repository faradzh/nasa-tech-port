<template>
  <VueDatePicker
    v-model="updatedSince"
    model-type="yyyy-MM-dd"
    :format="format"
  ></VueDatePicker>
</template>

<script setup lang="ts">
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useAppStore } from "~/store/app";

const appStore = useAppStore();
const { updatedSince } = storeToRefs(appStore);

const format = (date) => {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${year}-${month}-${day}`;
};
</script>
