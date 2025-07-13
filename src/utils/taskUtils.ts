import type { Task } from "../types/index";

export function getCategoryCounts(tasksByDate: Record<string, Task[]>) {
  const counts: Record<string, number> = {};

  Object.values(tasksByDate)
    .flat()
    .forEach((task) => {
      counts[task.category] = (counts[task.category] || 0) + 1;
    });

  return Object.entries(counts).map(([category, value]) => ({
    category,
    value,
  }));
}
