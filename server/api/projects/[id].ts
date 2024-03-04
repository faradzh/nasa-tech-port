import { Project } from "~/components/types";

export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
  const data = await $fetch<{ project: Project }>(
    `https://techport.nasa.gov/api/projects/${id}`
  );
  return data;
});
