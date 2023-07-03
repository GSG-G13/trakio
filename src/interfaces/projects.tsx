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

interface Props2 {
  open: boolean;
  handleClose : ()=>void;
}

interface Project {
  project_id?: string;
  title?: string;
}
export type {
  iProjects,
  Props,
  Props2,
  Project,
};
