import type { TaskProp } from "../types/index";
import TaskCategoryChart from "./TaskCategoryChart";

function GraphTab({ task }: TaskProp) {
  return (
    <div className="w-full h-full">
      {Object.keys(task).length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[500px] ">
          <p className="text-2xl font-medium text-zinc-700">
            No tasks added yet
          </p>
          <p className="mt-2 text-sm font-medium text-gray-400">
            Please add tasks to see the analytics
          </p>
        </div>
      ) : (
        <TaskCategoryChart task={task} />
      )}
    </div>
  );
}

export default GraphTab;
