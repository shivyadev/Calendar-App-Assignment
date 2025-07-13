import type { RootState } from "@/app/store";
import type { Task } from "@/types";
import { Calendar, Modal, type CalendarProps } from "antd";
import locale from "antd/es/date-picker/locale/en_US";
import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import { useState } from "react";
import { useSelector } from "react-redux";
import CellContents from "./CellContents";
import TaskForm from "./forms/TaskForm/TaskForm";
import TaskModal from "./TaskModal";

function CalendarTab() {
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Dayjs>(dayjs());
  const [selectedTask, setSelectedTask] = useState<Task>({
    id: "",
    title: "",
    date: dayjs(),
    description: "",
    category: "default",
  });
  const task = useSelector((state: RootState) => state.tasks);

  const handleSelect = (date: Dayjs) => {
    if (isTaskModalOpen) {
      return;
    }
    setSelectedDate(date);
    setIsAddModalOpen(true);
  };

  const handleAddModalClose = () => {
    setSelectedDate(dayjs());
    setIsAddModalOpen(false);
  };

  const handleTaskModalClose = () => {
    setSelectedTask({
      id: "",
      title: "",
      date: dayjs(),
      description: "",
      category: "default",
    });
    setIsTaskModalOpen(false);
  };

  const customLocale = {
    ...locale,
    lang: {
      ...locale.lang,
      shortWeekDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },
  };

  const dateCellRender = (value: Dayjs) => {
    const date = value.format("MMM DD, YYYY");
    const taskList = task[date] || [];
    return taskList.length !== 0 ? (
      <CellContents
        taskList={taskList}
        setSelectedTask={setSelectedTask}
        setIsTaskModalOpen={setIsTaskModalOpen}
      />
    ) : null;
  };

  const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    return info.originNode;
  };

  return (
    <div>
      <Calendar
        locale={customLocale}
        onSelect={handleSelect}
        cellRender={cellRender}
      />

      {/* Add new task modal */}
      <Modal
        closable={{ "aria-label": "Custom Close Button" }}
        open={isAddModalOpen}
        onCancel={handleAddModalClose}
        footer={[]}
      >
        <TaskForm
          date={selectedDate}
          setIsModalOpen={setIsAddModalOpen}
          mode="add"
        />
      </Modal>

      {/* View/Edit task modal */}
      <TaskModal
        task={selectedTask}
        isOpen={isTaskModalOpen}
        onClose={handleTaskModalClose}
      />
    </div>
  );
}

export default CalendarTab;
