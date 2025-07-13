import { allowedCategories } from "@/utils/constants";

export type Category = (typeof allowedCategories)[number];
export interface Task {
  id: string;
  title: string;
  date: string;
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

export interface TaskProp {
  task: Record<string, Task[]>;
}
