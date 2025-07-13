import { categoryIcons, categoryStyle, type Task } from "@/types";
import { Modal } from "antd";
import { useState } from "react";
import TaskCard from "./TaskCard";

interface Props {
  taskList: Task[];
}

function CellContents({ taskList }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleClick = (e: React.MouseEvent, task: Task) => {
    e.stopPropagation();
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  return (
    <div className="mt-2">
      {taskList.map((task: Task) => {
        const Icon = categoryIcons[task.category];
        return (
          <div
            className={`flex items-center gap-2 z-10 mt-1 rounded-full text-white transition-all duration-300 ${
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

      <Modal
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={[]}
      >
        <TaskCard task={selectedTask} />
      </Modal>
    </div>
  );
}

export default CellContents;
