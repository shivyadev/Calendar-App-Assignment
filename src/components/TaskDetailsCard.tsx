import { type Category, categoryStyle, type Task } from "@/types";

interface Props {
  task: Task;
}

function TaskDetailsCard({ task }: Props) {
  return (
    <section>
      <h2 className="mb-2 text-4xl font-bold">{task?.title}</h2>
      <p className="mb-6 text-gray-600">{task?.date.format("dddd, MMMM DD")}</p>

      {task?.description && task?.description?.length > 0 && (
        <div className="mt-10">
          <p className="w-full h-24 p-2 font-medium text-left align-top bg-gray-200 rounded resize-none text-md text-zinc-600">
            {task?.description}
          </p>
        </div>
      )}

      <div className="flex items-center mt-5">
        <span className="mr-3 text-gray-700">Status:</span>
        <span
          className={`px-3 py-1 rounded-md text-white font-medium text-sm ${
            categoryStyle[task?.category as Category] || categoryStyle.default
          }`}
        >
          {task?.category
            ? task.category[0].toUpperCase() + task.category.slice(1)
            : "Not Set"}
        </span>
      </div>
    </section>
  );
}

export default TaskDetailsCard;
