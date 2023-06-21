interface task {
  id?: number;
  title: string;
  description: string;
  created_at: string;
  due_date: string;
  project: string;
  priority: string;
  color: string;
  section: string;
}

export interface iTask {
  task: task;
}
