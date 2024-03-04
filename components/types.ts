export interface Project {
  projectId: number;
  title: string;
  startDateString: string;
  endDateString: string;
  leadOrganization: Organization;
}

interface Organization {
  organizationId: number;
  organizationName: string;
  acronym: string;
}
