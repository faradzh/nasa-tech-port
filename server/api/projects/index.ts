import { Project } from "~/components/types";

export default defineEventHandler(async (event) => {
  const { updatedSince } = getQuery(event);

  const { projects } = await $fetch<{ projects: Project[] }>(
    `https://techport.nasa.gov/api/projects?updatedSince=${updatedSince}`
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
