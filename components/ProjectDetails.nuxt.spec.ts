import { describe, it, expect } from "vitest";
import { screen, render } from "@testing-library/vue";
import ProjectDetails from "../../components/ProjectDetails.vue";

const mockProject = {
  title: "Shape Memory Alloy Material Maturation",
  benefits:
    "The end goal is to identify a material that has the potential to be commercially manufactured and purchased as Commercial Off-the-Shelf (COTS) hardware with well established properties.",
  startYear: 2023,
  startMonth: 4,
  endYear: 2027,
  endMonth: 10,
  statusDescription: "Active",
  principalInvestigators: [
    {
      fullName: "Santo Padula",
      primaryEmail: "Santo.A.Padula@nasa.gov",
    },
  ],
  projectManagers: [
    {
      fullName: "Andrea Marchica",
      primaryEmail: "andrea.marchica@nasa.gov",
    },
  ],
  leadOrganization: { organizationName: "Glenn Research Center" },
};
describe("ProjectDetails", () => {
  it("should render main sections", () => {
    render(ProjectDetails, { props: { project: mockProject } });
    expect(screen.getByText(mockProject.title)).toBeDefined();
    expect(screen.getByText(mockProject.benefits)).toBeDefined();
    expect(screen.getByText("4/2023 - 10/2027")).toBeDefined();
    expect(screen.getByText("Lead Organization:")).toBeDefined();
  });
});
