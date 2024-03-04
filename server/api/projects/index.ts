import { Project } from "~/components/types";

export default defineEventHandler(async () => {
  const { projects } = await $fetch<{ projects: Project[] }>(
    "https://techport.nasa.gov/api/projects?updatedSince=2024-02-26"
  );

  // const enhancedProjects = [
  //   await Promise.all(
  //     projects.map(async ({ projectId }) => {
  //       return $fetch<{ project: Project }>(
  //         `https://techport.nasa.gov/api/projects/${projectId}`
  //       );
  //     })
  //   ),
  // ].map((p) => p.project);

  // const refinedProjects = enhancedProjects.map((p) => p.project);

  return { projects };
});
