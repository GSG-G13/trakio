export interface task {
  id?: number;
  title: string;
  description: string;
  created_at: string;
  due_date: string;
  project: string;
  priority: string;
  color: string;
  section: string;
  user_id: number;
  name: string
}

export interface iTask {
  task?: task;
  tasks?: task[];
}
