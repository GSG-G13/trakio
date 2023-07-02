interface iProjects {
  project_id: number;
  title: string;
  description: string;
  user_id: number;
  role: string,
}

interface Props {
  userProjets :iProjects[];
}

export type { iProjects, Props };
