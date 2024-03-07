export interface Project {
  projectId: number;
  title: string;
  benefits: string;
  statusDescription: string;
  startDateString: string;
  endDateString: string;
  startMonth: string;
  leadOrganization: Organization;
  startYear: string;
  endMonth: string;
  endYear: string;
  principalInvestigators?: Contributor[];
  programDirectors?: Contributor[];
  projectManagers?: Contributor[];
}

interface Contributor {
  fullName: string;
  primaryEmail: string;
}

interface Organization {
  organizationId: number;
  organizationName?: string;
  acronym: string;
}
