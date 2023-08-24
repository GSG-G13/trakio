const PREFIX = `${import.meta.env.VITE_BASE_URL}/api`;
const PROJECT = `${PREFIX}/project`;

const ENDPOINTS = {
  // Auth
  LOGIN: `${PREFIX}/login`,
  SIGNUP: `${PREFIX}/signup`,
  LOGOUT: `${PREFIX}/logout`,

  // Projects
  PROJECT,
  PROJECTS: `${PREFIX}/projects`,
  PROJECT_BY_PROJECT_ID: (id: number) => `${PROJECT}/${id}`,

  // Tasks
  TASKS: `${PREFIX}/tasks`,
  TASKS_BY_PROJECT_ID: (id: number) => `${PROJECT}/${id}/task`,

  // Attachments
  ATTACHMENTS: (id: number) => `${PROJECT}/${id}/attachments`,

  // Members
  MEMBERS: (id: number) => `${PROJECT}/${id}/members`,

  // Sections
  SECTIONS: `${PREFIX}/sections`,

  // Priorities
  PRIORITIES: `${PREFIX}/priorities`,

  // Account
  ACCOUNT: `${PREFIX}/account`,

  // User
  USER: `${PREFIX}/user`,
};

export default ENDPOINTS;
