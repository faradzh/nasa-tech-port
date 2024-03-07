import { describe, it, expect, vi } from "vitest";
import { screen, render } from "@testing-library/vue";
import Project from "./ProjectDetails.vue";

const mockUseLazyFetch = vi.fn().mockResolvedValue({
  data: {
    projects: [],
  },
  pending: false,
  error: null,
});

describe("Projects", () => {
  it("should render main page", () => {
    render(Project, {
      global: {
        mocks: {
          useLazyFetch: mockUseLazyFetch,
        },
      },
    });
    // expect(screen.getByText(mockProject.title)).toBeDefined();
    // expect(screen.getByText(mockProject.benefits)).toBeDefined();
    // expect(screen.getByText("4/2023 - 10/2027")).toBeDefined();
    // expect(screen.getByText("Lead Organization:")).toBeDefined();
  });
});
