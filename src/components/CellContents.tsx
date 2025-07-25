import { type Task } from "@/types";
import { categoryIcons, categoryStyle } from "@/utils/constants";
interface Props {
  taskList: Task[];
  setSelectedTask: React.Dispatch<React.SetStateAction<Task>>;
  setIsTaskModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function CellContents({
  taskList,
  setSelectedTask,
  setIsTaskModalOpen,
}: Props) {
  const handleClick = (e: React.MouseEvent, task: Task) => {
    e.stopPropagation();
    setSelectedTask(task);
    setIsTaskModalOpen(true);
  };

  return (
    <div className="mt-2">
      {taskList.map((task: Task, idx: number) => {
        const Icon = categoryIcons[task.category];
        return (
          <div
            key={idx}
            className={`flex items-center gap-2 mt-1 rounded-full text-white transition-all duration-300 ${
              categoryStyle[task.category]
            }`}
            onClick={(e) => handleClick(e, task)}
          >
            <span className="ml-2">
              <Icon className="p-1 text-[14px] rounded-full" />
            </span>
            <span>{task.title}</span>
          </div>
        );
      })}
      <div className="mb-2"></div>
    </div>
  );
}

export default CellContents;
