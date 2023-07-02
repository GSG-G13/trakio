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

interface Project {
  project_id?: string;
  title?: string;
}
export type { iProjects, Props, Project };
