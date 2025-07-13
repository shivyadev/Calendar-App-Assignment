import {
  CheckCircleFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
  InfoCircleFilled,
} from "@ant-design/icons";
import type { Dayjs } from "dayjs";

export const allowedCategories = ["success", "warning", "issue", "info"];
export type Category = (typeof allowedCategories)[number];

export const categoryStyle: Record<Category, string> = {
  default: "bg-gray-300 hover:bg-gray-200",
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
  date: Dayjs;
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
