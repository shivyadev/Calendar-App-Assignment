import type { Category } from "@/types";
import { categoryStyle, type Task } from "@/types";
import { DeleteOutlined, FormOutlined } from "@ant-design/icons";

interface Props {
  task: Task | null;
}

function TaskCard({ task }: Props) {
  return (
    <div className="w-full px-10">
      <section className="flex justify-end w-full mt-2">
        <DeleteOutlined className="p-2 mx-2 text-xl transition-all duration-300 rounded-full cursor-pointer text-gray-50 hover:bg-gray-200" />
        <FormOutlined className="p-2 mx-2 mr-3 text-xl transition-all duration-300 rounded-full cursor-pointer hover:bg-gray-200" />
      </section>
      <section className="mt-10">
        <h2 className="text-5xl">{task?.title}</h2>
        <p className="mt-2 tracking-tight text-gray-700 text-md">
          {task?.date.format("dddd, MMMM DD")}
        </p>
        <div className="mt-10">
          {task?.description && task?.description?.length > 0 && (
            <p className="w-full h-24 p-2 text-left align-top bg-gray-200 rounded resize-none text-md text-zinc-600">
              {task?.description}
            </p>
          )}
        </div>
        <div className="mt-5 text-lg">
          <span className="mr-2">Status:</span>
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
    </div>
  );
}

export default TaskCard;
