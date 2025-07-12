export const allowedCategories = ["success", "warning", "issue", "info"];

export interface Task {
  id: string;
  title: string;
  description: string;
  category: string;
}

export interface TaskPayload {
  date: string;
  task: Task;
}

export interface TaskState {
  [date: string]: Task[];
}
