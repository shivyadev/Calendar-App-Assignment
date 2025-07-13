import {
  CheckCircleFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
  InfoCircleFilled,
} from "@ant-design/icons";

export const allowedCategories = ["success", "warning", "issue", "info"];
type Category = (typeof allowedCategories)[number];

export const categoryStyle: Record<Category, string> = {
  success: "bg-green-700 hover:bg-green-600",
  warning: "bg-amber-500 hover:bg-yellow-500",
  issue: "bg-red-700 hover:bg-red-600",
  info: "bg-blue-700 hover:bg-blue-600",
};

export const categoryIcons: Record<Category, typeof CheckCircleFilled> = {
  success: CheckCircleFilled,
  warning: ExclamationCircleFilled,
  issue: CloseCircleFilled,
  info: InfoCircleFilled,
};

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
