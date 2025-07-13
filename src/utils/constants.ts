import {
  CheckCircleFilled,
  CloseCircleFilled,
  ExclamationCircleFilled,
  InfoCircleFilled,
} from "@ant-design/icons";

import type { Category } from "../types";

export const graphCategoryColors: Record<Category, string> = {
  success: "#52c41a", // Green
  warning: "#faad14", // Orange/Yellow
  info: "#1890ff", // Blue
  issue: "#ff4d4f", // Red
};

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

export const allowedCategories = ["success", "warning", "issue", "info"];
